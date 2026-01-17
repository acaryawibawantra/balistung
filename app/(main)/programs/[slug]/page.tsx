export default function ProgramDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center py-20">
                Program Detail: {params.slug}
            </h1>
            {/* Program Hero */}
            {/* Detailed Curriculum */}
            {/* Learning Outcomes */}
            {/* Class Schedule */}
            {/* Teachers */}
            {/* Pricing & Packages */}
            {/* Enrollment Process */}
            {/* Related Testimonials */}
            {/* Enrollment Form */}
        </div>
    );
}
