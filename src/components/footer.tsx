import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, LucideProps, Mail } from "lucide-react";
import { ReactNode } from "react";

function NavLink({
    href,
    children,
    disabled,
}: {
    href: string;
    children: ReactNode;
    disabled?: boolean;
}) {
    return (
        <div className={cn({ "pointer-events-none text-muted": disabled })}>
            <a href={href} className="transition text-primary">
                {children}
            </a>
        </div>
    );
}

export const Logo = (props: LucideProps) => {
    return (
        <div>
            <img
                alt="Nuqi Logo"
                src={"/logo2.png"}
                className={props && props.className ? props.className : "rounded-md h-12 w-25 p-2 object-contain"}
            />
        </div>
    );
};

const Waves = () => {
    return (
        <div className="relative -z-50 overflow-hidden h-48 md:h-64 lg:h-96 w-full">
            <img
                src="/waves-1.png"
                className="absolute bottom-0 translate-y-1/2 w-full"
            />
            <img
                src="/waves-2.png"
                className="absolute bottom-0 translate-y-1/2 w-full"
            />
        </div>
    );
};

export function Footer() {
    return (
        <>
            <Waves />
            <footer className="bg-[#333c49] text-white">
                <div className="py-10 container">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="text-white flex flex-col gap-2 items-center">
                            <Logo className="rounded-md h-14 w-30 p-2 object-contain" />
                            <div className="flex gap-3">
                                <a
                                    aria-label="Contact by Mail"
                                    className=" text-primary hover:text-primary-foreground dark:text-zinc-400 dark:hover:text-primary-foreground transition"
                                    href="mailto:support@nuqiwealth.in"
                                >
                                    <Mail className="size-4" />
                                </a>
                                <a
                                    aria-label="Follow on Instagram"
                                    className=" text-primary hover:text-primary-foreground dark:text-zinc-400 dark:hover:text-primary-foreground transition"
                                    href="https://www.instagram.com/nuqi_wealth/"
                                >
                                    <Instagram className="size-4" />
                                </a>
                                <a
                                    aria-label="Follow on Facebook"
                                    className=" text-primary hover:text-primary-foreground dark:text-zinc-400 dark:hover:text-primary-foreground transition"
                                    href="https://www.facebook.com/Nuqiadvisory"
                                >
                                    <Facebook className="size-4" />
                                </a>
                                <a
                                    aria-label="Follow on Linkedin"
                                    className=" text-primary hover:text-primary-foreground dark:text-zinc-400 dark:hover:text-primary-foreground transition"
                                    href="https://www.linkedin.com/company/nuqi-wealth"
                                >
                                    <Linkedin className="size-4" />
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-24 md:pr-10">
                            <div className="hidden md:flex flex-col gap-2 text-xs font-sans max-w-40 text-primary">
                                <p>
                                    India: Office Nos 206, Parinee I, Veera
                                    Desai Road, Andheri West, Mumbai - 400053
                                </p>
                                <p>
                                    UAE: Office 501, 05th FLoor, Innovation One,
                                    DIFC, Dubai, UAE
                                </p>
                                <p>
                                    Singapore: 33A, Pagoda Street, Singapore
                                    (059192)
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 text-md font-semibold font-sans">
                                <NavLink href="/advisory">Advisory</NavLink>
                                <NavLink href="/about">About Us</NavLink>
                                <NavLink href="/faqs">FAQ's</NavLink>
                                <NavLink href="/ethosphere">Ethosphere</NavLink>
                                <NavLink href="/IRIS">
                                    IRIS
                                </NavLink>

                            </div>
                            <div className="flex flex-col gap-2 text-md font-semibold font-sans">
                                <NavLink href="/press">Media</NavLink>
                                <NavLink href="/contact">Contact Us</NavLink>
                                <NavLink href="/privacy">
                                    Privacy Policy
                                </NavLink>
                                <NavLink href="/disclaimer">Disclaimer</NavLink>
                                <NavLink href="/terms">Terms Of Use</NavLink>
                                <NavLink href="/legal">
                                    Legal & Regulatory
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden flex-col gap-2 text-xs font-sans text-primary text-center py-6">
                        <p>
                            India: Office Nos 206, Parinee I, Veera Desai Road,
                            Andheri West, Mumbai - 400053
                        </p>
                        <p>
                            UAE: Office 501, 05th FLoor, Innovation One, DIFC,
                            Dubai, UAE
                        </p>
                        <p>Singapore: 33A, Pagoda Street, Singapore (059192)</p>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row text-center text-primary/50 text-xs p-4">
                        © Nuqi Wealth India Pvt Ltd - Investment Advisory Unit
                        (Separately Identifiable Unit) <br /> SEBI RIA
                        Registration No: INA000016612. CIN:
                        U65990MH2020FTC351885. Validity of registration- 30th
                        Jan 2022 - Perpetual <br /> Registered Address: 16
                        Magnum Towers,4 Bunglow, Lokhandwala Complex, Andheri
                        West, Mumbai – 400058, Maharashtra. Corporate Address:
                        Office Nos 205, Parinee I, Veera Desai Road, Andheri
                        West, Mumbai - 400053
                        <br /> Disclaimer: Past performance is not a guarantee
                        of future results. The historical returns, expected
                        returns, and probability projections provided on this
                        website or App are for informational and illustrative
                        purposes only. They are not an indication of future
                        performance. All investing involves risk, including the
                        possible loss of all the money you invest. The past
                        performance of any trading system does not guarantee
                        future performance. Nuqi Wealth assumes no
                        responsibility for liability for your trading and
                        investment results. Registration granted by SEBI is no
                        way guarantee performance of the intermediary or provide
                        any assurance of returns to investors.
                    </div>
                </div>
            </footer>
        </>
    );
}
