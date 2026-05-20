import Sheet from "@/app/components/Sheet";
import Hero from "@/app/components/Hero";

type Props={
    children: React.ReactNode;
};

export default function RootLayout({children}:Props){
    return(
      <>
        <Hero title="Members" sub="メンバー" />
        <Sheet>
            {children}
        </Sheet>
      </>
        
    );
}
