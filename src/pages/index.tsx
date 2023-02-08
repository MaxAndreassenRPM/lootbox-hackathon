import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Image from 'next/image';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';
import {useEffect, useState} from "react";
import Button from "@/components/buttons/Button";
import {getConfig, LootboxConfig, Outfit} from "@/lootbox-config";

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
    const [config, setConfig] = useState({} as LootboxConfig);
    const [chosenItem, setChosenItem] = useState<Outfit>();

    const [total, setTotal] = useState(0);

    const [page, setPage] = useState('hub');

    const [random, setRandom] = useState(0);

    useEffect(() => {
        setConfig(getConfig());
    }, []);

    useEffect(() => {
        if (!config)
            return;

        const total = config?.outfits?.map(p => p.weight)
            .reduce((sum, current) => sum + current, 0);

        setTotal(total);
    }, [config])

    const chooseItem = () => {
        const selected = Math.floor(Math.random() * total);

        let count = 0;

        for (const outfit of config.outfits) {
            count = count + outfit.weight;

            if (count >= selected) {
                setChosenItem(outfit);
                return;
            }
        }
    }

    const getPercentageChance = (weight: number) => {
        return (weight / total) * 100;
    }

    return (
        <Layout>
            {/* <Seo templateTitle='Home' /> */}
            <Seo/>

            <main>
                {page == 'hub' && <section className='bg-black full-screen' style={{
                    background: "url('/hub.png') no-repeat center center fixed"
                }}>
                    <div
                        className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
                        {<Button className='mt-8 hub-continue-button' variant='light'
                                 onClick={() => setPage('shop')}>
                            Shop
                        </Button>}
                    </div>
                </section>}

                {page == 'shop' && <section className='bg-black full-screen' style={{background: "url('/shop.png') no-repeat center center fixed"}}>
                    <div
                        className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
                        {<Button className='mt-8 buy-lootbox-button' variant='light'
                                 onClick={() => setPage('open-lootbox')}>
                        </Button>}
                    </div>
                </section>}

                {page == 'open-lootbox' && <section className='bg-black full-screen' style={{background: "url('/open.png') no-repeat center center fixed"}}>
                    <div
                        className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
                        {<Button className='mt-8 open-lootbox-button' variant='light'
                                 onClick={() => {
                                     chooseItem();
                                     setPage('opening-lootbox');
                                     setRandom(Math.random());
                                     setTimeout(() => {
                                         setPage('opened-lootbox');
                                     }, 3500);
                                 }}>
                        </Button>}
                    </div>
                </section>}

                {page == 'opening-lootbox' && <section className='bg-black full-screen' style={{background: `url('/opening.png') no-repeat center center fixed`}}>
                    <div
                        className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
                        <Image src={`/animation.gif?a=${random}`} alt="me" width="1024" height="1024"/>
                    </div>
                </section>}

                {page == 'opened-lootbox' && <section className='bg-black full-screen' style={{background: `url('${chosenItem?.imageUrl}') no-repeat center center fixed`}}>
                    <div
                        className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
                        {<Button className='mt-8 open-lootbox-button' variant='light'
                                 onClick={() => setPage('hub-final')}>
                        </Button>}
                    </div>
                </section>}

                {page == 'hub-final' && <section className='bg-black full-screen' style={{background: `url('${chosenItem?.hubUrl}') no-repeat center center fixed`}}>
                    <div className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
                        {<Button className='mt-8 hub-continue-button' variant='light'
                                 onClick={() => setPage('shop')}> Shop
                        </Button>}
                    </div>
                </section>}

                {/*page == 'lootbox-select' && <section className='bg-black full-screen' style={{background: "url('/shop.png') no-repeat center center fixed", backgroundSize: "100% 100%"}}>
                    <div
                        className='layout flex min-h-screen flex-col items-center justify-center py-12 text-center'>
                        <h1 className='mt-4 mb-8'>
                            Legendary Lootbox
                        </h1>

                        {!chosenItem && <div className='mb-8'>What will you unlock?</div>}
                        {chosenItem && <div className='mb-8'>You've unlocked: {chosenItem.name} </div>}

                        {chosenItem && <Image src={chosenItem?.imageUrl as string} alt="me" width="64" height="64"/>}

                        {<Button className='mt-8' variant='light' onClick={() => chooseItem()}>
                            Open Lootbox
                        </Button>}

                        <div className='mt-8' style={{fontSize: '14px'}}>Unlock-able Items</div>
                        {config.outfits?.map(outfit =>
                            <div key={outfit.name} style={{
                                fontSize: '12px',
                                marginTop: '4px'
                            }}>{outfit.name}: {getPercentageChance(outfit.weight)}% chance</div>
                        )}

                        <footer className='absolute bottom-2 text-gray-700'>
                            © {new Date().getFullYear()} By{' '}
                            <UnderlineLink href='https://readyplayer.me'>
                                Ready Player Me - Lootbox Champs - Winter Week 2023
                            </UnderlineLink>
                        </footer>
                    </div>
                </section>*/}
            </main>
        </Layout>
    );
}
