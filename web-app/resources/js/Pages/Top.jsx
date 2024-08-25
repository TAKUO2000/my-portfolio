import AppHead from '@/Components/AppHead';
import Header from '@/Layouts/header';

export default function Top({ auth }) {
    return (
        <>
        <AppHead title="Top"/>
        <Header
            auth={auth}
        />
        
        </>
    );
}