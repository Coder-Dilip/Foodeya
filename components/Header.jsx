import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Menu, Instagram, Facebook, GitHub, Close, Search } from '@mui/icons-material';
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
    const [search, setsearch] = useState("")
const route=useRouter()
    const handleSearch=(id,title)=>{
        localStorage.setItem('landingID',JSON.stringify({id:id,title:title}))
        window.location.href=`/recipe/${id}`
      }
    return (
        <>
            <nav  style={{
                width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '1px 10px 17px -10px rgba(0,0,0,0.08)',
                padding: '0 20px', position: 'fixed', top: 0, zIndex: 1000,marginTop:'15px',maxWidth:'1200px',borderRadius:'10px',left:width>1200?`${0.5*width-600}px`:'5%',right:'5%'
            }} className={styles.nav}>
                <div style={{
                    display: 'flex', width: '100%', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0 20px', position: 'fixed', top: -6, zIndex: 1000, maxWidth: '1100px'
                }}>
                    <Link href='/'><div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <img src="/foodeya.svg" alt="food logo"  style={{width:'120px'}} />
                    </div></Link>

                    

                    {width > 550 ? <div style={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', maxWidth: '500px', fontWeight: 'bold',marginTop:'15px' }}>

                        <Link href='/'><p className={pathname == '/' ? styles.active : styles.nav_links} style={{ cursor: 'pointer' }}>Home</p></Link>
                        <Link href='/recipe'><p className={pathname == '/recipe' ? styles.active : styles.nav_links} style={{ cursor: 'pointer' }}>Recipe</p></Link>                       
                        <Link href='/Contact'><p className={router.pathname == '/Contact' ? styles.active : styles.nav_links}>Contact</p></Link>
                    </div> : null}

                    {width < 550 && clicked ? <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', maxWidth: '500px', fontWeight: 'bold', flexDirection: 'column', transition: '.3s', position: 'absolute', top: top, alignItems: 'flex-start', borderRadius: '10px', padding: '30px 20px', background: "rgba(255, 255, 255, 0.989)", height: '100vh', left: '1px', opacity: opacity }} className={styles.responsive_container}>
                    
                        <Link href='/' ><p onClick={handleClick} className={pathname == '/' ? styles.active : styles.nav_links} style={{ fontSize: '1.5rem', marginBottom: '5px', cursor: 'pointer' }}>Home</p></Link>
                        <Link href='/recipe' ><p onClick={handleClick} className={pathname == '/recipe' ? styles.active : styles.nav_links} style={{ fontSize: '1.5rem', marginBottom: '5px', cursor: 'pointer' }}>Recipe</p></Link>
                        <Link href='/Contact'><p onClick={handleClick} className={router.pathname == '/contact' ? styles.active : styles.nav_links} style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Contact</p></Link>      
                                      
                        
                       
                        <div style={{ width: '100%', marginTop: '130px' }}>

                            <Close onClick={handleClick} style={{ position: 'relative', left: '90%', background: 'green', borderRadius: '50%', boxShadow: '1px 10px 17px -10px rgba(0,0,0,0.08)', padding: '10px', color: 'white', fontSize: '2.1rem', cursor: 'pointer' }} />
                        </div>
                    </div> : null}

{width>770?<form style={{display:'flex',alignItems:'center',borderRadius:'3px',padding:'10px',boxShadow:'0px 10px 17px -10px rgba(0,0,0,0.28)'}} onSubmit={(e)=>{e.preventDefault();handleSearch(1,search)}}><input style={{border:'none',width:'100px',outline:'none',background:'none'}} placeholder='Search...' value={search} onChange={(e)=>setsearch(e.target.value)}/><Search style={{color:'black'}}/></form>:null}
                    {width < 550 ? <div onClick={handleClick}><Menu style={{cursor: 'pointer' }} /></div> : null}
                </div>
            </nav>
            <div style={{ marginBottom: '40px' }}></div>
        </>
    )
}
