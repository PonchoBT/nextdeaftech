// import Link from "next/link"
// import styles from '../styles/Home.module.css'

// /* Menu Component here */
// function Menu() {
//     return(
//         <ul>
//             <Link href="/">Home</Link>&nbsp;
//             <Link href="/contacts">Contacts</Link>
//         </ul>
//     )
// }

// export default function Layout({children }) {
//     return(
//         <div className={styles.container}>
//             {/* insert Menu here */}
//             <Menu />
//             {children}
//         </div>)
// }


import Link from "next/link"

export default function Layout({ children }) {
    const links = [
        {
            title: "Home", 
            path: "/"
        }, 
        {
            title: "Top Stories", 
            path: "/news/top-stories"
        }, 
        {
            title: "Popular", 
            path: "/news/popular"
        },
        {
            title: "Sections", 
            path: "/sections"
          }
      ];
    return(
        <>
         {links.map(link => {
            return <Link href={link.path}>{link.title}{" "}</Link>;
         })}
          {children}
        </>
    )
}