import namespace from '@rdfjs/namespace'

declare const NS: typeof namespace

export type NamespaceBuilder = ReturnType<typeof namespace>
export default NS
