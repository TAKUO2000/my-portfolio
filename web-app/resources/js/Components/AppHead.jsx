import { Head } from '@inertiajs/react';

const AppHead = ({ title })=> {
    return(
        <Head>
                <title>{title ? `${title} ` : 'Takuo2000-portfolio'}</title>
                <link rel='icon' href= "/favicon-32x32.png" />
                
        </Head>   
    )
}

export default AppHead
// 後で確認
