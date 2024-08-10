
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h1>inner layout text</h1>
            {children}
        </>

    );
}
