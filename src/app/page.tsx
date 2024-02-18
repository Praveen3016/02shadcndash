
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { CardProps } from "@/components/Card";
import Card from "@/components/Card";
import BarChart from "@/components/Charts";
import SalesCard, { SalesProps } from "@/components/SalesCard";


export default function Home() {

  const cardData: CardProps[] = [
    {
      label: "Total Revenue",
      amount: "$45,231.89",
      desc: "+20.1% from last month",
      icon: DollarSign
    },
    {
      label: "Subscriptions",
      amount: "+2350",
      desc: "+180.1% from last month",
      icon: Users
    },
    {
      label: "Sales",
      amount: "+12,234",
      desc: "+19% from last month",
      icon: CreditCard
    },
    {
      label: "Active Now",
      amount: "+573",
      desc: "+201 since last hour",
      icon: Activity
    }
  ];

  const uesrSalesData: SalesProps[] = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      saleAmount: "+$1,999.00"
    },
    {
      name: "Jackson Lee",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$1,999.00"
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$39.00"
    },
    {
      name: "William Kim",
      email: "will@email.com",
      saleAmount: "+$299.00"
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      saleAmount: "+$39.00"
    }
  ];
  


  return (
    <div className="flex flex-col gap-5 w-full" >
    <h1 className="text-2xl font-semibold">Dashboard</h1>
    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 sm:grid-cols-2 xl:grid-cols-4">
    {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            desc={d.desc}
            icon={d.icon}
            label={d.label}
          />
        ))}
    </section>
    <section className="grid grid-cols-1 lg:grid-cols-2 transition-all gap-4 ">
      <div className="w-full flex flex-col gap-3 rounded-xl border p-5 shadow">
   <p>Overview</p>
   <BarChart/>

      </div>
      <div className="w-full flex flex-col gap-3 rounded-xl border p-5 shadow">
   <p>Resent Sales</p>
   <p className="text-sm text-gray-400">you made 265 sales this month </p>
   {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
   
      </div>
    </section>
    </div>
  );
}
