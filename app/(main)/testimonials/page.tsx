import Container from "@/components/layout/container";
import TestimonialsSection from "@/components/home/testimonials";

export default function TestimonialsPage() {
    return (
        <main className="pt-20">
            <Container>
                <div className="text-center py-10">
                    <h1 className="font-display font-bold text-4xl text-gray-900 mb-4">
                        Apa Kata Mereka? 💬
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Cerita sukses murid-murid Balistung yang telah merasakan manfaat metode belajar kami.
                    </p>
                </div>
            </Container>

            <TestimonialsSection />
        </main>
    );
}
