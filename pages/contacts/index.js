import Link from "next/link";
import contacts from "../api/contacts";

export default function Contacts() {
    return(
     <ul>
       {contacts.map(contacts => {
    return(<li>{contacts.name}</li>)
       })}
     </ul>)
}