import { ClientOnly } from './client';
import '../../styles.scss';

export function generateStaticParams() {
    return [{ slug: [''] }];
}

export default function Page() {
    return <ClientOnly />;
}
