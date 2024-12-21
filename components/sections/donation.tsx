"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Card } from "@/components/ui/card";
import { GridBackground } from "@/components/animations/background-effects";
import { 
  Heart, 
  IndianRupee,
  Bitcoin, 
  Shield,
  ArrowRight,
  CheckCircle2,
  QrCode,
  CreditCard,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const traditionalAmounts = [500, 1000, 2500, 5000];
const cryptoOptions = [
  { name: 'Bitcoin', symbol: 'BTC', address: '1234...5678' },
  { name: 'Ethereum', symbol: 'ETH', address: '0x1234...5678' },
  { name: 'USDT', symbol: 'USDT', address: '0x8765...4321' }
];

const upiOptions = [
  { name: 'Google Pay', id: 'publicvoice@okaxis' },
  { name: 'PhonePe', id: 'publicvoice@okaxis' },
  { name: 'Paytm', id: '9082869501@paytm' }
];

export const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <GridBackground />
      
      <div className="container mx-auto px-4 relative">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Your contribution helps us create lasting change in communities across India. 
              All donations are eligible for tax benefits under 80G.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="upi" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upi" className="text-base">
                <QrCode className="w-4 h-4 mr-2" />
                UPI
              </TabsTrigger>
              <TabsTrigger value="traditional" className="text-base">
                <CreditCard className="w-4 h-4 mr-2" />
                Card/NetBanking
              </TabsTrigger>
              <TabsTrigger value="crypto" className="text-base">
                <Bitcoin className="w-4 h-4 mr-2" />
                Cryptocurrency
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upi">
              <FadeIn>
                <Card className="p-8 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {traditionalAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedAmount === amount ? "default" : "outline"}
                          className="w-full h-16 text-lg font-semibold"
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                        >
                          <IndianRupee className="w-4 h-4 mr-1" />
                          {amount.toLocaleString('en-IN')}
                        </Button>
                      ))}
                    </div>

                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="pl-8"
                      />
                      <IndianRupee className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>

                    <div className="grid gap-4">
                      {upiOptions.map((upi, index) => (
                        <div 
                          key={index}
                          className="p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <QrCode className="w-5 h-5 text-primary" />
                              <span className="font-semibold">{upi.name}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8">
                              Show QR
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                          <code className="text-sm text-muted-foreground mt-1">
                            UPI ID: {upi.id}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            </TabsContent>

            <TabsContent value="traditional">
              <FadeIn>
                <Card className="p-8 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Button size="lg" className="w-full h-12 text-base">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Credit/Debit Card
                      </Button>
                      <Button size="lg" className="w-full h-12 text-base">
                        <Building2 className="w-4 h-4 mr-2" />
                        Net Banking
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg border border-primary/10">
                      <h4 className="font-semibold mb-2">Bank Transfer Details</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>Account Name: The Public Voice</p>
                        <p>Account Number: XXXXX XXXXX</p>
                        <p>IFSC Code: XXXX0000XXX</p>
                        <p>Bank: State Bank of India</p>
                        <p>Branch: Pahar Ganj, New Delhi</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            </TabsContent>

            <TabsContent value="crypto">
              <FadeIn>
                <Card className="p-8 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="grid gap-4">
                      {cryptoOptions.map((crypto, index) => (
                        <div 
                          key={index}
                          className="p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Bitcoin className="w-5 h-5 text-primary" />
                              <span className="font-semibold">{crypto.name}</span>
                              <span className="text-sm text-muted-foreground">({crypto.symbol})</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8">
                              Copy Address
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                          <code className="text-sm text-muted-foreground">
                            {crypto.address}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            </TabsContent>
          </Tabs>

          <FadeIn delay={0.2}>
            <div className="mt-8 text-center space-y-4">
              <div className="flex flex-wrap justify-center gap-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">80G Tax Benefits</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Secure Payments</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Instant Receipt</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};