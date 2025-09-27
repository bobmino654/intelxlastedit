import { freeTools } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

export function ToolsSection() {
    return (
        <section className="mt-20" id="free-tools">
            <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Free Security Tools
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {freeTools.map(tool => (
                    <Card key={tool.id} className="group cursor-pointer transform text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20">
                         <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <tool.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline group-hover:text-accent">{tool.title}</CardTitle>
                            <CardDescription className="mt-2">{tool.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
      </section>
    );
}
