import Footer from "@/components/navigation/footer";

export default function TransactionsFlowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-[32px] max-[40rem]:p-[10px] w-full">
      <main>{children}</main>
      <Footer />
    </main>
  );
}
