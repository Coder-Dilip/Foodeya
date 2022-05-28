import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Menu, Instagram, Facebook, GitHub, Close } from '@mui/icons-material';
import router, { useRouter } from 'next/router';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Header() {
    const [width, setwidth] = useState(0)
    const [color, setcolor] = useState('');
    const [clicked, setclicked] = useState(false);
    const [top, settop] = useState(-100);
    const [opacity, setopacity] = useState(1)
    const [pathname, setpathname] = useState('')
    useEffect(() => {
        setwidth(window.innerWidth)
        let pathnames = window.location.href
        let splitted = pathnames.split('/')
        setpathname(splitted[splitted.length - 1])
    }, [])

    setInterval(() => {
        if (process.browser) {
            setwidth(window.innerWidth)

        }
    }, 200);

    function handleClick() {
        let pathnames = window.location.href
        let splitted = pathnames.split('/')
        setpathname(splitted[splitted.length - 1])
        if (color == '') {
            setcolor('blue')
        } else {
            setcolor('')
        }
        if (clicked == false) {
            settop(50)
            // setopacity(0)
        }


        setclicked(!clicked)

    }
    return (
        <>
            <nav className={styles.nav} style={{
                width: '100%', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '1px 10px 17px -10px rgba(0,0,0,0.08)',
                padding: '0 20px', position: 'fixed', top: 0, zIndex: 1000,marginTop:'20px'
            }}>
                <div style={{
                    display: 'flex', width: '100%', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0 20px', position: 'fixed', top: -6, zIndex: 1000, maxWidth: '1100px'
                }}>
                    <Link href='/'><div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <img src="foodeya.svg" alt="food logo"  style={{width:'120px'}} />
                    </div></Link>

                    {width > 550 ? <div style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', maxWidth: '500px', fontWeight: 'bold',marginTop:'15px' }}>
                        <Link href='/products'><p className={pathname == '/products' ? styles.active : styles.nav_links} style={{ cursor: 'pointer' }}>Products</p></Link>
                        <Link href='/about'><p className={router.pathname == '/about' ? styles.active : styles.nav_links}>About</p></Link>
                       
                        <Link href='/Blog'><p className={router.pathname == '/Blog' ? styles.active : styles.nav_links}>Blog</p></Link>
                    </div> : null}

                    {width < 550 && clicked ? <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', maxWidth: '500px', fontWeight: 'bold', flexDirection: 'column', transition: '.3s', position: 'absolute', top: top, alignItems: 'flex-start', borderRadius: '10px', padding: '30px 20px', background: "rgba(255, 255, 255, 0.989)", height: '100vh', left: '1px', opacity: opacity }} className={styles.responsive_container}>
                        <Link href='/product' ><p onClick={handleClick} className={pathname == '/product' ? styles.active : styles.nav_links} style={{ fontSize: '1.5rem', marginBottom: '5px', cursor: 'pointer' }}>Product</p></Link>
                        <Link href='/blog'><p onClick={handleClick} className={router.pathname == '/contact' ? styles.active : styles.nav_links} style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Blog</p></Link>
                        <Link href='/about'><p onClick={handleClick} className={router.pathname == '/about' ? styles.active : styles.nav_links} style={{ fontSize: '1.5rem', marginBottom: '5px' }}>About</p></Link>
                    
                        
                       
                        <div style={{ width: '100%', marginTop: '130px' }}>

                            <Close onClick={handleClick} style={{ position: 'relative', left: '90%', background: 'green', borderRadius: '50%', boxShadow: '1px 10px 17px -10px rgba(0,0,0,0.08)', padding: '10px', color: 'white', fontSize: '2.1rem', cursor: 'pointer' }} />
                        </div>
                    </div> : null}

                    {width > 550 ? <button onClick={() => window.location.href = '/favourite'} className={router.pathname == '/favourite' ? styles.red_active : styles.nav_links}  style={{marginTop:'15px',borderRadius:"15px",border:'none',background:'white'}}><FavoriteIcon/></button> : null}

                    {width < 550 ? <div onClick={handleClick}><Menu style={{cursor: 'pointer' }} /></div> : null}
                </div>
            </nav>
            <div style={{ marginBottom: '40px' }}></div>
        </>
    )
}
