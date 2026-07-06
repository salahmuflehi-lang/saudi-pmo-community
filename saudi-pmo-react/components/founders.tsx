"use client";

import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface Founder {
  img: string;
  name: string;
  arName: string;
  role: "Founding Member" | "Member";
}

const FOUNDERS: Founder[] = [
  { img: "/founders/yanbawi.jpeg", name: "Tariq F. Yanbawi", arName: "م. طارق فؤاد ينبعاوي", role: "Founding Member" },
  { img: "/founders/ghaith.jpeg", name: "Majed Ghaith", arName: "م. ماجد غيث", role: "Founding Member" },
  { img: "/founders/milibari.jpeg", name: "Dr. Ali Milibari", arName: "د. علي ميليباري", role: "Member" },
  { img: "/founders/marabi.png", name: "Ahmed Al-Marabi", arName: "م. أحمد المرعبي", role: "Member" },
  { img: "/founders/aqqab.jpeg", name: "Hosam Al-Aqqab", arName: "م. حسام العقاب", role: "Member" },
  { img: "/founders/ghamdi.jpeg", name: "Emad Al-Ghamdi", arName: "م. عماد الغامدي", role: "Member" },
  { img: "/founders/qazzaz.jpeg", name: "Amr Qazzaz", arName: "م. عمرو قزاز", role: "Member" },
  { img: "/founders/zidan.png", name: "Mahmoud Zidan", arName: "م. محمود زيدان", role: "Member" },
  { img: "/founders/maha.png", name: "Maha Abdulmajeed", arName: "م. مها عبدالمجيد", role: "Member" },
  { img: "/founders/mudather.jpeg", name: "Faris Mudather", arName: "م. فارس مدثر", role: "Member" },
];

export function Founders() {
  return (
    <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {FOUNDERS.map((f) => (
        <li key={f.img}>
          <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
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
