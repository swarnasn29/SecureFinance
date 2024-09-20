/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart, Wallet, Shield, Vote } from 'lucide-react'
import ContractInteraction from './ContractInteraction'

export default function Dashboard() {
  const [balance, setBalance] = useState("1000.00 ETH")
  const [lendingRate, setLendingRate] = useState("3.5%")
  const [borrowingRate, setBorrowingRate] = useState("5.2%")
  const [insuranceCoverage, setInsuranceCoverage] = useState("500.00 ETH")
  const [governanceTokens, setGovernanceTokens] = useState("100 SFT")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SecureFinance Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Balance</CardTitle>
            <CardDescription>Your current balance across all assets</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{balance}</p>
          </CardContent>
          <CardFooter>
            <Button>Deposit</Button>
            <Button variant="outline" className="ml-2">Withdraw</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Governance</CardTitle>
            <CardDescription>Participate in platform decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Governance Tokens: {governanceTokens}</p>
            <Button>View Proposals</Button>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="lending" className="mb-6">
        <TabsList>
          <TabsTrigger value="lending">Lending</TabsTrigger>
          <TabsTrigger value="borrowing">Borrowing</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
        </TabsList>
        <TabsContent value="lending">
          <Card>
            <CardHeader>
              <CardTitle>Lending</CardTitle>
              <CardDescription>Lend your assets and earn interest</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Current Lending Rate: {lendingRate}</p>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="lendAmount">Amount to Lend</Label>
                <Input type="number" id="lendAmount" placeholder="Enter amount" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lend Assets</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="borrowing">
          <Card>
            <CardHeader>
              <CardTitle>Borrowing</CardTitle>
              <CardDescription>Borrow assets using your collateral</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Current Borrowing Rate: {borrowingRate}</p>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="borrowAmount">Amount to Borrow</Label>
                <Input type="number" id="borrowAmount" placeholder="Enter amount" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Borrow Assets</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="insurance">
          <Card>
            <CardHeader>
              <CardTitle>Insurance</CardTitle>
              <CardDescription>Protect your assets against smart contract failures</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Current Coverage: {insuranceCoverage}</p>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="insuranceAmount">Coverage Amount</Label>
                <Input type="number" id="insuranceAmount" placeholder="Enter amount" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Purchase Coverage</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value Locked</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Insurance Claims</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Governance Proposals</CardTitle>
            <Vote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last month</p>
          </CardContent>
        </Card>
      </div>

      <ContractInteraction />
    </div>
  )
}