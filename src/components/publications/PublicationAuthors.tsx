import type { Author } from '@/types/publication';

export function AuthorshipLegend({ className = '' }: { className?: string }) {
    return (
        <p className={`flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400 ${className}`}>
            <span><sup>*</sup> Equal contribution</span>
            <span><sup>†</sup> Project Leader</span>
        </p>
    );
}

export default function PublicationAuthors({ authors }: { authors: Author[] }) {
    return <>{authors.map((author, index) => (
        <span key={`${author.name}-${index}`}>
            <span className={author.isHighlighted ? 'font-semibold text-accent' : undefined}>
                {author.name}
                {author.isCoFirstAuthor && <sup title="Equal contribution" aria-label="Equal contribution">*</sup>}
                {author.isProjectLeader && <sup title="Project Leader" aria-label="Project Leader">†</sup>}
            </span>
            {index < authors.length - 1 && ', '}
        </span>
    ))}</>;
}
