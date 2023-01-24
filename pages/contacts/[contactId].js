import Layout from "../../components/Layout";
import { useRouter } from "next/router"
import contacts from "../api/contacts"
import Link from "next/link";

export default function Contact() {
    const router = useRouter()
    const { contactId } = router.query
    const contact = contacts.find(contact => contact.id === contactId);
    const [first, last] = contact?.name.split(" ");
    return(
    <Layout>
        <Link href="#" onClick={() => router.back()}>Back</Link>
        <h2>Contact: {last.toUpperCase()}, {first}</h2>
    </Layout>)
}