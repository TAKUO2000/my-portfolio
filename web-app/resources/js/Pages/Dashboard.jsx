import Header from '@/Layouts/header';
import AppHead from '@/Components/AppHead';

export default function Dashboard({ auth }) {
    return (
        <>
        <AppHead title="Top"/>
        <Header
            auth={auth}
        />
        
        </>
    );
}
