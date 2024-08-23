import Header from '@/Layouts/header'
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <>
        <Head title="Dashboard" />
        <Header
            auth = {auth}
        />
        </>
    );
}
