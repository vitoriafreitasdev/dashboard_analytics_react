// types.ts - Definições TypeScript

export const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

export const monthlyProfit: Array<number> = [244566.54, 342700.87, 345600.09, 424840.76, 427843.98, 247424.43, 546721.23, 346649.09, 316239.00, 446500.85, 416300.59, 546531.62]


export const monthlyActiveUsers: Array<number> = [4454, 3297, 4509, 4276, 4298, 5443, 5223, 4469, 4500, 4485, 5169, 5652]

export const monthlyVisators: Array<number> = [360, 200, 320, 140, 210, 380, 100, 215, 150, 230, 370, 390]

export const monthlySells: Array<number> = [5200, 4500, 5600, 3750, 4200, 5630, 4780, 5220, 3500, 4800, 5340, 4600]


// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   segment: 'premium' | 'regular' | 'trial';
//   region: string;
//   registrationDate: string;
// }

// export interface Sale {
//   id: string;
//   userId: string;
//   amount: number;
//   product: string;
//   category: 'eletrônicos' | 'vestuário' | 'casa' | 'livros' | 'esportes';
//   date: string;
//   status: 'completed' | 'pending' | 'cancelled';
//   paymentMethod: 'credit_card' | 'debit_card' | 'pix' | 'boleto';
// }

// export interface WebsiteTraffic {
//   date: string;
//   visitors: number;
//   pageViews: number;
//   bounceRate: number;
//   avgSessionDuration: number; // em minutos
//   newVisitors: number;
//   returningVisitors: number;
// }

// export interface KPI {
//   totalSales: number;
//   activeUsers: number;
//   conversionRate: number;
//   avgOrderValue: number;
//   customerSatisfaction: number;
// }

// // dados.mock.ts
// export const mockUsers: User[] = [
//   {
//     id: '1',
//     name: 'João Silva',
//     email: 'joao@email.com',
//     segment: 'premium',
//     region: 'Sudeste',
//     registrationDate: '2024-01-15'
//   },
//   {
//     id: '2',
//     name: 'Maria Santos',
//     email: 'maria@email.com',
//     segment: 'regular',
//     region: 'Nordeste',
//     registrationDate: '2024-02-20'
//   },
//   // ... mais 98 usuários
// ];

// export const mockSales: Sale[] = [
//   {
//     id: '1',
//     userId: '1',
//     amount: 1250.50,
//     product: 'iPhone 15',
//     category: 'eletrônicos',
//     date: '2024-09-01',
//     status: 'completed',
//     paymentMethod: 'credit_card'
//   },
//   {
//     id: '2',
//     userId: '2',
//     amount: 89.90,
//     product: 'Camiseta Premium',
//     category: 'vestuário',
//     date: '2024-09-01',
//     status: 'completed',
//     paymentMethod: 'pix'
//   },
//   // ... mais 500 vendas distribuídas por vários meses
// ];

// export const mockWebsiteTraffic: WebsiteTraffic[] = [
//   {
//     date: '2024-09-01',
//     visitors: 1542,
//     pageViews: 8921,
//     bounceRate: 32.5,
//     avgSessionDuration: 4.2,
//     newVisitors: 1021,
//     returningVisitors: 521
//   },
//   {
//     date: '2024-09-02',
//     visitors: 1689,
//     pageViews: 9456,
//     bounceRate: 28.7,
//     avgSessionDuration: 5.1,
//     newVisitors: 1123,
//     returningVisitors: 566
//   },
//   // ... dados diários dos últimos 6 meses
// ];

// export const mockKPIs: KPI = {
//   totalSales: 1542890.75,
//   activeUsers: 12450,
//   conversionRate: 3.2,
//   avgOrderValue: 245.80,
//   customerSatisfaction: 4.5
// };

// // Dados para gráficos específicos
// export const salesByCategory = [
//   { category: 'eletrônicos', sales: 542100, count: 2210 },
//   { category: 'vestuário', sales: 321450, count: 4560 },
//   { category: 'casa', sales: 287600, count: 1890 },
//   { category: 'livros', sales: 98750, count: 3420 },
//   { category: 'esportes', sales: 156320, count: 1230 }
// ];

// export const monthlyRevenue = [
//   { month: 'Jan', revenue: 245000, growth: 12.5 },
//   { month: 'Fev', revenue: 287500, growth: 17.3 },
//   { month: 'Mar', revenue: 312000, growth: 8.5 },
//   { month: 'Abr', revenue: 298000, growth: -4.5 },
//   { month: 'Mai', revenue: 345000, growth: 15.8 },
//   { month: 'Jun', revenue: 412000, growth: 19.4 },
//   { month: 'Jul', revenue: 398000, growth: -3.4 },
//   { month: 'Ago', revenue: 456000, growth: 14.6 },
//   { month: 'Set', revenue: 521000, growth: 14.3 }
// ];

// export const userAcquisition = [
//   { channel: 'Organic Search', users: 5420, cost: 0 },
//   { channel: 'Social Media', users: 3210, cost: 12500 },
//   { channel: 'Email Marketing', users: 1980, cost: 4500 },
//   { channel: 'Paid Ads', users: 4560, cost: 28700 },
//   { channel: 'Referral', users: 1230, cost: 0 }
// ];

// export const regionalPerformance = [
//   { region: 'Sudeste', sales: 842100, customers: 5420 },
//   { region: 'Sul', sales: 321450, customers: 2210 },
//   { region: 'Nordeste', sales: 287600, customers: 1890 },
//   { region: 'Centro-Oeste', sales: 156320, customers: 980 },
//   { region: 'Norte', sales: 98750, customers: 650 }
// ];

// export const realTimeData = {
//   currentVisitors: 245,
//   activeSessions: 189,
//   salesToday: 42,
//   revenueToday: 12580.50
// };

// // Dados para heatmap (tráfego por hora/dia)
// export const trafficHeatmap = {
//   hours: ['00h', '02h', '04h', '06h', '08h', '10h', '12h', '14h', '16h', '18h', '20h', '22h'],
//   weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
//   data: [
//     [12, 8, 5, 15, 45, 120, 156, 142, 134, 98, 67, 23],
//     [15, 10, 7, 18, 52, 134, 167, 158, 145, 105, 72, 28],
//     // ... dados para cada dia da semana
//   ]
// };