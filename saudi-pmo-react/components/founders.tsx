"use client";

import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface Founder {
  img: string;
  name: string;
  arName: string;
  role: "Founding Member" | "Member";
  title?: string;
  arTitle?: string;
}

const FOUNDERS: Founder[] = [
  { img: "/founders/yanbawi.jpeg", name: "Tariq F. Yanbawi", arName: "م. طارق فؤاد ينبعاوي", role: "Founding Member", title: "Community President", arTitle: "رئيس المجتمع" },
  { img: "/founders/ghaith.jpeg", name: "Majed Ghaith", arName: "م. ماجد غيث", role: "Founding Member" },
  { img: "/founders/milibari.jpeg", name: "Dr. Ali Milibari", arName: "د. علي ميليباري", role: "Member" },
  { img: "/founders/qazzaz.jpeg", name: "Amr Qazzaz", arName: "م. عمرو قزاز", role: "Member" },
  { img: "/founders/ghamdi.jpeg", name: "Emad Al-Ghamdi", arName: "م. عماد الغامدي", role: "Member" },
  { img: "/founders/afandi.jpeg", name: "Mohammed Afandi", arName: "م. محمد أفندي", role: "Member" },
  { img: "/founders/maha.jpeg", name: "Maha Abdulmajeed", arName: "م. مها عبدالمجيد", role: "Member", title: "Social Communication Team Lead", arTitle: "قائد فريق التواصل الاجتماعي" },
  { img: "/founders/marabi.jpeg", name: "Ahmed Al-Marabi", arName: "م. أحمد المرعبي", role: "Member", title: "Meetups Team Lead", arTitle: "قائد فريق اللقاءات" },
  { img: "/founders/aqqab.jpeg", name: "Hosam Oqab", arName: "م. حسام عقاب", role: "Member" },
  { img: "/founders/zidan.jpeg", name: "Mahmoud Zidan", arName: "م. محمود زيدان", role: "Member" },
  { img: "/founders/mudather.jpeg", name: "Faris Mudather", arName: "م. فارس مدثر", role: "Member" },
  { img: "/founders/alhadi.jpeg", name: "Al-Hadi", arName: "م. الهادي", role: "Member" },
];

export function Founders() {
  return (
    <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {FOUNDERS.map((f) => (
        <li key={f.img}>
          <div
            className={
              "relative h-full rounded-[1.25rem] border-[0.75px] p-2 md:rounded-[1.5rem] md:p-3 " +
              (f.title
                ? "border-primary/60 shadow-[0_10px_34px_-18px_rgba(196,154,96,0.55)]"
                : "border-border")
            }
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] bg-background shadow-sm">
              <div className="relative aspect-square w-full">
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <h3 className="font-sans text-base font-semibold tracking-[-0.02em] text-foreground md:text-lg">
                    {f.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground" dir="rtl" lang="ar">
                    {f.arName}
                  </p>
                  {f.title && (
                    <p className="mt-1 flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.05em] text-primary">
                      <span aria-hidden>★</span>
                      {f.title}
                      <span dir="rtl" lang="ar" className="font-semibold normal-case">
                        · {f.arTitle}
                      </span>
                    </p>
                  )}
                </div>
                <span className="shrink-0 text-right text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  {f.role === "Founding Member" ? (
                    <>
                      Founding
                      <br />
                      Member
                    </>
                  ) : (
                    "Member"
                  )}
                </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
