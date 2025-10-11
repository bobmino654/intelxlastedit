
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { LinkComponent as Link } from "@/components/LinkComponent";

export function BlogSection() {
    return (
        <section className="mt-20">
            <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              From the Blog
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                {blogPosts.map(post => {
                    const image = placeholderImages.find(p => p.id === post.imageId);
                    return (
                        <Card key={post.id} className="overflow-hidden">
                           {image && (
                             <div className="aspect-video relative">
                                <Image src={image.imageUrl} alt={post.title} fill className="object-cover" data-ai-hint={image.imageHint} />
                             </div>
                           )}
                           <CardHeader>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <Badge variant="secondary">{post.category}</Badge>
                                <span>{post.date}</span>
                            </div>
                            <CardTitle className="font-headline mt-2 text-xl">{post.title}</CardTitle>
                           </CardHeader>
                           <CardContent>
                                <p className="text-muted-foreground">{post.summary}</p>
                           </CardContent>
                           <CardFooter>
                                <Button variant="link" asChild className="p-0 text-accent">
                                    <Link href="#">Read More &rarr;</Link>
                                </Button>
                           </CardFooter>
                        </Card>
                    )
                })}
            </div>
      </section>
    );
}
