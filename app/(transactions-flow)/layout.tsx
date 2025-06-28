export default function TransactionsFlowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="p-[32px] w-full">{children}</main>;
}
