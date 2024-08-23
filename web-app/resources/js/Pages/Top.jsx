import { Head } from '@inertiajs/react';
import Header from '@/Layouts/header'

export default function Top({ auth }) {
    return (
        <>
        <Head title="Dashboard" />
        <Header
            auth={auth}
        />
        </>
    );
}