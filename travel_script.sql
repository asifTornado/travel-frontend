USE [master]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Agents]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Agents](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
	[Phone] [nvarchar](max) NULL,
	[Professional] [bit] NULL,
 CONSTRAINT [PK_Agents] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Budgets]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Budgets](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TripId]  AS (concat('B',right('00000'+CONVERT([nvarchar](5),[Id]),(5)))),
	[Subject] [nvarchar](max) NULL,
	[Brand] [nvarchar](max) NULL,
	[Destination] [nvarchar](max) NULL,
	[DepartureDate] [nvarchar](max) NULL,
	[ArrivalDate] [nvarchar](max) NULL,
	[NumberOfDays] [nvarchar](max) NULL,
	[NumberOfTravelers] [nvarchar](max) NULL,
	[AirTicketBudget] [nvarchar](max) NULL,
	[HotelBudget] [nvarchar](max) NULL,
	[TotalBookingCost] [nvarchar](max) NULL,
	[TransportExpense] [nvarchar](max) NULL,
	[IncidentalExpense] [nvarchar](max) NULL,
	[TotalTripBudget] [nvarchar](max) NULL,
	[Initiated] [nvarchar](max) NULL,
	[CreationDate] [nvarchar](max) NULL,
	[Custom] [bit] NULL,
	[CurrentHandlerId] [int] NULL,
	[PrevHandlerIds] [nvarchar](max) NULL,
	[Processed] [bit] NULL,
	[Rejected] [bit] NULL,
	[SeekingAccountsApprovalForTickets] [bit] NULL,
	[TicketsApprovedByAccounts] [bit] NULL,
	[TicketsMoneyDisbursed] [bit] NULL,
	[AmountDisbursedTickets] [nvarchar](max) NULL,
	[TicketsAccountHolderNumber] [nvarchar](max) NULL,
	[TicketsAccountNumber] [nvarchar](max) NULL,
 CONSTRAINT [PK_Budgets] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BudgetTicketApprovals]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BudgetTicketApprovals](
	[BudgetId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_BudgetTicketApprovals] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BudgetTravelers]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BudgetTravelers](
	[BudgetsId] [int] NOT NULL,
	[TravelersId] [int] NOT NULL,
 CONSTRAINT [PK_BudgetTravelers] PRIMARY KEY CLUSTERED 
(
	[BudgetsId] ASC,
	[TravelersId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Costs]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Costs](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Item] [nvarchar](max) NULL,
	[ItemCost] [nvarchar](max) NULL,
	[NumberOfItems] [nvarchar](max) NULL,
	[TotalItemCost] [int] NULL,
	[RequestId] [int] NULL,
 CONSTRAINT [PK_Costs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExpenseReports]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseReports](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeName] [nvarchar](max) NULL,
	[EmployeeId] [int] NULL,
	[Department] [nvarchar](max) NULL,
	[StartDate] [nvarchar](max) NULL,
	[EndDate] [nvarchar](max) NULL,
	[RequestId] [int] NULL,
	[Approvals] [nvarchar](max) NULL,
	[CurrentHandlerId] [int] NULL,
	[Processed] [bit] NULL,
	[Status] [nvarchar](max) NULL,
	[Submitted] [bit] NULL,
	[SupervisorApproved] [bit] NULL,
	[Rejected] [bit] NULL,
	[TravelManagerSubmitted] [bit] NULL,
	[PrevHandlerIds] [nvarchar](max) NULL,
	[AmountDisbursed] [nvarchar](max) NULL,
	[Disbursed] [bit] NULL,
	[BankAccountHolderName] [nvarchar](max) NULL,
	[BankAccountNumber] [nvarchar](max) NULL,
 CONSTRAINT [PK_ExpenseReports] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Expenses]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Expenses](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [nvarchar](max) NULL,
	[ExpenseType] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Amount] [nvarchar](max) NULL,
	[Notes] [nvarchar](max) NULL,
	[ExpenseReportId] [int] NULL,
	[Voucher] [nvarchar](max) NULL,
	[VoucherGiven] [bit] NULL,
	[Source] [nvarchar](max) NULL,
 CONSTRAINT [PK_Expenses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FlyerNos]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlyerNos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Airline] [nvarchar](max) NULL,
	[Number] [nvarchar](max) NULL,
	[UserId] [int] NULL,
 CONSTRAINT [PK_FlyerNos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelApprovals]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelApprovals](
	[HotelApprovalsId] [int] NOT NULL,
	[HotelApprovedId] [int] NOT NULL,
 CONSTRAINT [PK_HotelApprovals] PRIMARY KEY CLUSTERED 
(
	[HotelApprovalsId] ASC,
	[HotelApprovedId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelForBrands]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelForBrands](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Brand] [nvarchar](max) NULL,
	[BrandOfficeAddress] [nvarchar](max) NULL,
 CONSTRAINT [PK_HotelForBrands] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelInvoiceQuotations]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelInvoiceQuotations](
	[InvoicesId] [int] NOT NULL,
	[QuotationsId] [int] NOT NULL,
 CONSTRAINT [PK_HotelInvoiceQuotations] PRIMARY KEY CLUSTERED 
(
	[InvoicesId] ASC,
	[QuotationsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelInvoices]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelInvoices](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Type] [nvarchar](max) NULL,
	[Filename] [nvarchar](max) NULL,
	[FilePath] [nvarchar](max) NULL,
 CONSTRAINT [PK_HotelInvoices] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelLocations]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelLocations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LocationName] [nvarchar](max) NULL,
	[HotelForBrandsId] [int] NULL,
 CONSTRAINT [PK_HotelLocations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelQuotations]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelQuotations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Linker] [uniqueidentifier] NULL,
	[RequestIds] [nvarchar](max) NULL,
	[QuoteGiver] [nvarchar](max) NULL,
	[QuotationText] [nvarchar](max) NULL,
	[Selected] [bit] NULL,
	[Booked] [bit] NULL,
	[Confirmed] [bit] NULL,
	[Hovered] [bit] NULL,
	[Custom] [bit] NULL,
	[RequestId] [int] NULL,
	[Approved] [bit] NULL,
	[AgentId] [int] NULL,
	[TotalCosts] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_HotelQuotations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Hotels]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Hotels](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[HotelName] [nvarchar](max) NULL,
	[HotelAddress] [nvarchar](max) NULL,
	[HotelLocationsId] [int] NULL,
	[Rooms] [nvarchar](max) NULL,
 CONSTRAINT [PK_Hotels] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Logs]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Logs](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [nvarchar](max) NOT NULL,
	[Event] [nvarchar](max) NOT NULL,
	[FromId] [int] NULL,
	[ToId] [int] NULL,
	[RequestId] [int] NULL,
 CONSTRAINT [PK_Logs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Messages]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Messages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](max) NULL,
	[Content] [nvarchar](max) NULL,
	[RequestId] [int] NULL,
 CONSTRAINT [PK_Messages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MoneyReceipts]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MoneyReceipts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [nvarchar](max) NULL,
	[Unit] [nvarchar](max) NULL,
	[AdvanceMoneyInHand] [nvarchar](max) NULL,
	[Section] [nvarchar](max) NULL,
	[I] [nvarchar](max) NULL,
	[Designation] [nvarchar](max) NULL,
	[RequiredTK] [nvarchar](max) NULL,
	[Taka] [nvarchar](max) NULL,
	[AsAdvanceAgainst] [nvarchar](max) NULL,
	[Status] [nvarchar](max) NULL,
	[SerialNo] [nvarchar](max) NULL,
	[Processed] [bit] NULL,
	[SupervisorApproved] [bit] NULL,
	[Submitted] [bit] NULL,
	[Approvals] [nvarchar](max) NULL,
	[CurrentHandlerId] [int] NULL,
	[RequestId] [int] NULL,
	[Rejected] [bit] NULL,
	[PrevHandlerIds] [nvarchar](max) NULL,
	[AmountDisbursed] [nvarchar](max) NULL,
	[BankAccountHolderName] [nvarchar](max) NULL,
	[BankAccountNumber] [nvarchar](max) NULL,
	[Disbursed] [bit] NULL,
 CONSTRAINT [PK_MoneyReceipts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Notifications]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notifications](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Time] [nvarchar](max) NULL,
	[Message] [nvarchar](max) NULL,
	[SourceId] [int] NULL,
	[From] [int] NULL,
	[To] [int] NULL,
	[Type] [nvarchar](max) NULL,
	[Event] [nvarchar](max) NULL,
 CONSTRAINT [PK_Notifications] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Quotations]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Quotations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Linker] [uniqueidentifier] NULL,
	[QuoteGiver] [nvarchar](max) NULL,
	[QuotationText] [nvarchar](max) NULL,
	[Selected] [bit] NULL,
	[Booked] [bit] NULL,
	[Confirmed] [bit] NULL,
	[Hovered] [bit] NULL,
	[Custom] [bit] NULL,
	[RequestIds] [nvarchar](max) NULL,
	[RequestId] [int] NULL,
	[Approved] [bit] NULL,
	[AgentId] [int] NULL,
	[TotalCosts] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Quotations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RequestAgents]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RequestAgents](
	[AgentsId] [int] NOT NULL,
	[RequestsId] [int] NOT NULL,
 CONSTRAINT [PK_RequestAgents] PRIMARY KEY CLUSTERED 
(
	[AgentsId] ASC,
	[RequestsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Requests]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Requests](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Custom] [bit] NULL,
	[Objectives] [nvarchar](max) NULL,
	[Meetings] [nvarchar](max) NULL,
	[Items] [nvarchar](max) NULL,
	[Personnel] [nvarchar](max) NULL,
	[Destination] [nvarchar](max) NULL,
	[Purpose] [nvarchar](max) NULL,
	[Mode] [nvarchar](max) NULL,
	[AccomodationRequired] [nvarchar](max) NULL,
	[NumberOfNights] [nvarchar](max) NULL,
	[TotalCost] [int] NULL,
	[RequesterId] [int] NULL,
	[Number]  AS (replicate('0',(7)-len([Id]))+CONVERT([varchar](7),[Id])),
	[Status] [nvarchar](max) NULL,
	[AgentNumbers] [int] NULL,
	[CurrentHandlerId] [int] NULL,
	[Date] [nvarchar](max) NULL,
	[StartDate] [nvarchar](max) NULL,
	[EndDate] [nvarchar](max) NULL,
	[Booked] [bit] NULL,
	[Confirmed] [bit] NULL,
	[Selected] [bit] NULL,
	[BeingProcessed] [bit] NULL,
	[Processed] [bit] NULL,
	[SeekingInvoices] [bit] NULL,
	[SeekingHotelInvoices] [bit] NULL,
	[InTrip] [bit] NULL,
	[Best] [nvarchar](max) NULL,
	[BestHotel] [nvarchar](max) NULL,
	[HotelBooked] [bit] NULL,
	[HotelConfirmed] [bit] NULL,
	[TicketInvoiceUploaded] [bit] NULL,
	[HotelInvoiceUploaded] [bit] NULL,
	[BudgetId] [int] NULL,
	[RequestBudget] [nvarchar](max) NULL,
	[ExpenseReportGiven] [bit] NULL,
	[DepartmentHeadApproved] [bit] NULL,
	[SupervisorApproved] [bit] NULL,
	[PermanentlyRejected] [bit] NULL,
	[Activities] [nvarchar](max) NULL,
	[MoneyReceiptId] [int] NOT NULL,
	[MoneyReceiptSubmitted] [bit] NOT NULL,
	[Approvals] [nvarchar](max) NULL,
	[PrevHandlerIds] [nvarchar](max) NULL,
 CONSTRAINT [PK_Requests] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TicketApprovals]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TicketApprovals](
	[TicketApprovalsId] [int] NOT NULL,
	[TicketApprovedId] [int] NOT NULL,
 CONSTRAINT [PK_TicketApprovals] PRIMARY KEY CLUSTERED 
(
	[TicketApprovalsId] ASC,
	[TicketApprovedId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TicketInvoiceQuotations]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TicketInvoiceQuotations](
	[InvoicesId] [int] NOT NULL,
	[QuotationsId] [int] NOT NULL,
 CONSTRAINT [PK_TicketInvoiceQuotations] PRIMARY KEY CLUSTERED 
(
	[InvoicesId] ASC,
	[QuotationsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TicketInvoices]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TicketInvoices](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Type] [nvarchar](max) NULL,
	[Filename] [nvarchar](max) NULL,
	[FilePath] [nvarchar](max) NULL,
 CONSTRAINT [PK_TicketInvoices] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRole]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRole](
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_UserRole] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2/29/2024 12:03:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EmpId]  AS (replicate('0',(7)-len([Id]))+CONVERT([varchar](7),[Id])),
	[EmpName] [nvarchar](max) NULL,
	[EmpCode] [nvarchar](max) NULL,
	[Designation] [nvarchar](max) NULL,
	[MailAddress] [nvarchar](max) NULL,
	[Unit] [nvarchar](max) NULL,
	[Section] [nvarchar](max) NULL,
	[Wing] [nvarchar](max) NULL,
	[Team] [nvarchar](max) NULL,
	[Department] [nvarchar](max) NULL,
	[Password] [nvarchar](max) NULL,
	[UserType] [nvarchar](max) NULL,
	[Available] [bit] NULL,
	[Rating] [int] NULL,
	[Raters] [int] NULL,
	[Extension] [nvarchar](max) NULL,
	[MobileNo] [nvarchar](max) NULL,
	[Location] [nvarchar](max) NULL,
	[Numbers] [int] NULL,
	[SuperVisorId] [int] NULL,
	[ZonalHeadId] [int] NULL,
	[TravelHandlerId] [int] NULL,
	[PassportNo] [nvarchar](max) NULL,
	[Preferences] [nvarchar](max) NULL,
	[HasFrequentFlyerNo] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240213043138_these are the migrations after learning many to many relationships 2', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240213102610_changed the expense report part', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240214034928_added travel manager submittted to expense report', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240214051004_added list of prevhandlers', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240215082924_added some extra items to request', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240217041202_expense changed', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240217062442_added source field to expense model', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240217105804_changed the expense report model added disbursement', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240220103531_migrations added for notification model', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240227023125_changed the money receipt and expense report model', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240227035654_changed the money receipt and expense report model 2', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240228031224_another migrations added please work', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240228093724_new migrations added haafdafsdgasdf', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240229025922_id added to budgetTicketApprovals', N'7.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240229032447_budget  model changed 123', N'7.0.2')
GO
SET IDENTITY_INSERT [dbo].[Budgets] ON 

INSERT [dbo].[Budgets] ([Id], [Subject], [Brand], [Destination], [DepartureDate], [ArrivalDate], [NumberOfDays], [NumberOfTravelers], [AirTicketBudget], [HotelBudget], [TotalBookingCost], [TransportExpense], [IncidentalExpense], [TotalTripBudget], [Initiated], [CreationDate], [Custom], [CurrentHandlerId], [PrevHandlerIds], [Processed], [Rejected], [SeekingAccountsApprovalForTickets], [TicketsApprovedByAccounts], [TicketsMoneyDisbursed], [AmountDisbursedTickets], [TicketsAccountHolderNumber], [TicketsAccountNumber]) VALUES (1, N'adsf', N'asdf', N'asdf', N'2024-02-08', N'2024-02-23', N'15', N'1', N'123', N'123', N'246', N'123', N'123', N'492', N'No', N'Tuesday, February 13, 2024 11:18:20 AM', 0, NULL, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL)
INSERT [dbo].[Budgets] ([Id], [Subject], [Brand], [Destination], [DepartureDate], [ArrivalDate], [NumberOfDays], [NumberOfTravelers], [AirTicketBudget], [HotelBudget], [TotalBookingCost], [TransportExpense], [IncidentalExpense], [TotalTripBudget], [Initiated], [CreationDate], [Custom], [CurrentHandlerId], [PrevHandlerIds], [Processed], [Rejected], [SeekingAccountsApprovalForTickets], [TicketsApprovedByAccounts], [TicketsMoneyDisbursed], [AmountDisbursedTickets], [TicketsAccountHolderNumber], [TicketsAccountNumber]) VALUES (1002, N'buyer meeting', N'Kohl', N'New York', N'2024-02-08', N'2024-02-22', N'14', N'1', N'2000', N'1000', N'3000', N'200', N'100', N'3300', N'Yes', NULL, 0, 1, N'[3,3]', 1, 0, 1, 1, 1, N'123', N'123', N'123')
SET IDENTITY_INSERT [dbo].[Budgets] OFF
GO
SET IDENTITY_INSERT [dbo].[BudgetTicketApprovals] ON 

INSERT [dbo].[BudgetTicketApprovals] ([BudgetId], [UserId], [Id]) VALUES (1002, 1, 2)
INSERT [dbo].[BudgetTicketApprovals] ([BudgetId], [UserId], [Id]) VALUES (1002, 1, 3)
INSERT [dbo].[BudgetTicketApprovals] ([BudgetId], [UserId], [Id]) VALUES (1002, 1, 4)
INSERT [dbo].[BudgetTicketApprovals] ([BudgetId], [UserId], [Id]) VALUES (1002, 2, 5)
INSERT [dbo].[BudgetTicketApprovals] ([BudgetId], [UserId], [Id]) VALUES (1002, 2, 6)
INSERT [dbo].[BudgetTicketApprovals] ([BudgetId], [UserId], [Id]) VALUES (1002, 3, 7)
SET IDENTITY_INSERT [dbo].[BudgetTicketApprovals] OFF
GO
INSERT [dbo].[BudgetTravelers] ([BudgetsId], [TravelersId]) VALUES (1002, 1)
INSERT [dbo].[BudgetTravelers] ([BudgetsId], [TravelersId]) VALUES (1, 49)
GO
SET IDENTITY_INSERT [dbo].[ExpenseReports] ON 

INSERT [dbo].[ExpenseReports] ([Id], [EmployeeName], [EmployeeId], [Department], [StartDate], [EndDate], [RequestId], [Approvals], [CurrentHandlerId], [Processed], [Status], [Submitted], [SupervisorApproved], [Rejected], [TravelManagerSubmitted], [PrevHandlerIds], [AmountDisbursed], [Disbursed], [BankAccountHolderName], [BankAccountNumber]) VALUES (2007, N'asif_administration9', 1, N'administration', N'2024-02-08', N'2024-02-22', 4010, N'[{"_id":1,"empId":"0000001","empName":"asif_administration9","empCode":null,"designation":"Management Trainee Officer","mailAddress":"asif_administration@gmail.com","unit":"Corporate Office 2","section":"","wing":"","team":"","department":"administration","roles":null,"password":"123","userType":"admin","available":true,"rating":0,"raters":0,"extension":"changed","mobileNo":"12","location":"Dhaka","numbers":0,"superVisorId":1,"superVisor":{"_id":1,"empId":"0000001","empName":"asif_administration9","empCode":null,"designation":"Management Trainee Officer","mailAddress":"asif_administration@gmail.com","unit":"Corporate Office 2","section":"","wing":"","team":"","department":"administration","roles":null,"password":"123","userType":"admin","available":true,"rating":0,"raters":0,"extension":"changed","mobileNo":"12","location":"Dhaka","numbers":0,"superVisorId":1,"superVisor":null,"zonalHeadId":1,"zonalHead":null,"travelHandlerId":null,"travelHandler":null,"passportNo":null,"flyerNos":null,"preferences":"","hasFrequentFlyerNo":"","budgets":null,"requests":[],"superVised":[null],"head":[],"travelHandled":[],"currentHandled":[],"ticketApproved":[],"hotelApproved":[],"currentReceiptsHandled":[],"currentExpenseReportsHandled":[]},"zonalHeadId":1,"zonalHead":{"_id":1,"empId":"0000001","empName":"asif_administration9","empCode":null,"designation":"Management Trainee Officer","mailAddress":"asif_administration@gmail.com","unit":"Corporate Office 2","section":"","wing":"","team":"","department":"administration","roles":null,"password":"123","userType":"admin","available":true,"rating":0,"raters":0,"extension":"changed","mobileNo":"12","location":"Dhaka","numbers":0,"superVisorId":1,"superVisor":null,"zonalHeadId":1,"zonalHead":null,"travelHandlerId":null,"travelHandler":null,"passportNo":null,"flyerNos":null,"preferences":"","hasFrequentFlyerNo":"","budgets":null,"requests":[],"superVised":[],"head":[null],"travelHandled":[],"currentHandled":[],"ticketApproved":[],"hotelApproved":[],"currentReceiptsHandled":[],"currentExpenseReportsHandled":[]},"travelHandlerId":null,"travelHandler":null,"passportNo":null,"flyerNos":[],"preferences":"","hasFrequentFlyerNo":"","budgets":null,"requests":[],"superVised":[],"head":[],"travelHandled":[],"currentHandled":[],"ticketApproved":[],"hotelApproved":[],"currentReceiptsHandled":[],"currentExpenseReportsHandled":[]}]', 48, 0, N'Being Processed', 1, 1, 0, 1, N'[1]', N'123', 1, N'asdf', N'13123')
SET IDENTITY_INSERT [dbo].[ExpenseReports] OFF
GO
SET IDENTITY_INSERT [dbo].[Expenses] ON 

INSERT [dbo].[Expenses] ([Id], [Date], [ExpenseType], [Description], [Amount], [Notes], [ExpenseReportId], [Voucher], [VoucherGiven], [Source]) VALUES (3011, N'2024-02-15', N'123', N'123', N'123', N'sdfasdf', 2007, N'Steven Bartlett - The Diary of a CEO _ The 33 Laws of Business and Life (2023, Penguin Publishing Group) - libgen.li_5597872c.epub', 1, N'traveler')
SET IDENTITY_INSERT [dbo].[Expenses] OFF
GO
SET IDENTITY_INSERT [dbo].[HotelForBrands] ON 

INSERT [dbo].[HotelForBrands] ([Id], [Brand], [BrandOfficeAddress]) VALUES (1, N'Kohl', N'New York')
SET IDENTITY_INSERT [dbo].[HotelForBrands] OFF
GO
SET IDENTITY_INSERT [dbo].[HotelInvoices] ON 

INSERT [dbo].[HotelInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (1, N'', N'Dashboard latest (1)_4657e91c.xlsm', N'Dashboard latest (1)_4657e91c.xlsm')
INSERT [dbo].[HotelInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (2, N'', N'Air Ticket-page-001_cfb5fdbc.jpg', N'Air Ticket-page-001_cfb5fdbc.jpg')
INSERT [dbo].[HotelInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (3, N'', N'Air Ticket_d95d8078.pdf', N'Air Ticket_d95d8078.pdf')
INSERT [dbo].[HotelInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (4, N'', N'Air Ticket-page-001_f050c45a.jpg', N'Air Ticket-page-001_f050c45a.jpg')
SET IDENTITY_INSERT [dbo].[HotelInvoices] OFF
GO
SET IDENTITY_INSERT [dbo].[HotelLocations] ON 

INSERT [dbo].[HotelLocations] ([Id], [LocationName], [HotelForBrandsId]) VALUES (1, N'New York', 1)
INSERT [dbo].[HotelLocations] ([Id], [LocationName], [HotelForBrandsId]) VALUES (2, N'San Francisco', 1)
SET IDENTITY_INSERT [dbo].[HotelLocations] OFF
GO
SET IDENTITY_INSERT [dbo].[HotelQuotations] ON 

INSERT [dbo].[HotelQuotations] ([Id], [Linker], [RequestIds], [QuoteGiver], [QuotationText], [Selected], [Booked], [Confirmed], [Hovered], [Custom], [RequestId], [Approved], [AgentId], [TotalCosts]) VALUES (4011, N'd97ebcb1-6fdf-44c0-ad72-6a0be4cd8516', N'4010', N'asif_administration9', N' 
        <div style="border:2px solid black; padding:10px; margin-bottom:10px">
        <div style="font-weight:bold"><span>Hotel</span> Hilton</div>      
        
        <div>
        <span style="font-weight:bold">Location:</span><span style="margin-right:4px">Some Address </span>
        <span style="font-weight:bold">Room Type: </span><span>King</span>
        </div>
        <div >
        <span style=" font-weight:bold">Average Rate:</span><span style=" margin-right:4px">2000</span>
        <span style=" font-weight:bold">Actual Rate:</span><span style=" margin-right:4px">23</span>
        <span style=" font-weight:bold">Number of Rooms:</span><span style=" margin-right:4px">2</span>
        </div>
        </div>
        
        <div style="border:2px solid black; padding:10px; margin-bottom:10px">
        <div style="font-weight:bold"><span>Hotel</span> Hilton</div>      
        
        <div>
        <span style="font-weight:bold">Location:</span><span style="margin-right:4px">Some Address </span>
        <span style="font-weight:bold">Room Type: </span><span>Queen</span>
        </div>
        <div >
        <span style=" font-weight:bold">Average Rate:</span><span style=" margin-right:4px">1000</span>
        <span style=" font-weight:bold">Actual Rate:</span><span style=" margin-right:4px">23</span>
        <span style=" font-weight:bold">Number of Rooms:</span><span style=" margin-right:4px">3</span>
        </div>
        </div>
        <div>
    <div>  
 <span style=" font-weight:bold">Grand Total</span>
 <span>115</span>
    </div>

    
        <div>
        <span style=" font-weight:bold">asif_administration9</span>
        <span>223 </span>
        </div>
        ', 0, 1, 1, 0, 0, 4010, 1, NULL, N'[{"Id":null,"Name":"","TotalCost":0}]')
SET IDENTITY_INSERT [dbo].[HotelQuotations] OFF
GO
SET IDENTITY_INSERT [dbo].[Hotels] ON 

INSERT [dbo].[Hotels] ([Id], [HotelName], [HotelAddress], [HotelLocationsId], [Rooms]) VALUES (1, N'Hilton', N'Some Address', 1, N'[{"type":"King","average_rate":"2000","actual_rate":""},{"type":"Queen","average_rate":"1000","actual_rate":""}]')
INSERT [dbo].[Hotels] ([Id], [HotelName], [HotelAddress], [HotelLocationsId], [Rooms]) VALUES (2, N'Ritz Carlton', N'some address', 2, N'[{"type":"Single","average_rate":"200","actual_rate":""},{"type":"Family","average_rate":"2000","actual_rate":""}]')
SET IDENTITY_INSERT [dbo].[Hotels] OFF
GO
SET IDENTITY_INSERT [dbo].[Logs] ON 

INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6082, N'2/26/2024 2:27:16 PM', N'Travel Request Raised', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6083, N'2/26/2024 2:28:06 PM', N'Essential information submitted by traveler', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6084, N'2/26/2024 2:53:33 PM', N'Quotation Sent', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6085, N'2/26/2024 2:53:36 PM', N'Seeking Supervisor Approval For Air Ticket', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6086, N'2/26/2024 2:53:38 PM', N'Quotation Confirmed', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6087, N'2/26/2024 2:56:31 PM', N'Hotel Quotation Sent', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6088, N'2/26/2024 2:56:37 PM', N'Hotel Quotation Booked', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6089, N'2/26/2024 2:56:39 PM', N'Hotel Quotation Confirmed', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6090, N'2/26/2024 3:17:31 PM', N'Advance Payment Form Submitted', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6091, N'2/26/2024 3:20:06 PM', N'Advance Payment Form Submitted By Supervisor', 1, 48, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6092, N'2/26/2024 4:35:50 PM', N'ExpenseReport Submitted', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6093, N'2/27/2024 10:49:46 AM', N'Expense Report Information Added By Travel Manager', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6094, N'2/27/2024 10:50:57 AM', N'Expense Report Information Added By Travel Manager', 1, 48, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6095, N'2/28/2024 3:26:55 PM', N'Advance Payment Form Forwarded', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6096, N'2/28/2024 3:33:14 PM', N'Advance Payment Form Forwarded', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6097, N'2/28/2024 3:33:29 PM', N'Advance Payment Form Forwarded', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6098, N'2/28/2024 3:33:37 PM', N'Advance Payment Form Forwarded', 1, 3, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6099, N'2/28/2024 3:40:09 PM', N'Advance Payment Form Forwarded', 3, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6100, N'2/28/2024 4:29:19 PM', N'Advance Payment Form Forwarded', 1, 2, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6101, N'2/28/2024 4:41:00 PM', N'Quotation Revoked', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6102, N'2/28/2024 4:41:05 PM', N'Quotation Confirmed', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (6103, N'2/28/2024 4:41:11 PM', N'Air Ticket Invoice Sent', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (7095, N'2/29/2024 8:52:19 AM', N'Advance Payment Form Forwarded', 2, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (7096, N'2/29/2024 9:05:14 AM', N'Advance Payment Form Forwarded', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (7097, N'2/29/2024 9:05:31 AM', N'Advance Payment Form Forwarded', 1, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (7098, N'2/29/2024 9:17:42 AM', N'Advance Payment Form Forwarded', 1, 2, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (7099, N'2/29/2024 9:18:09 AM', N'Advance Payment Form Forwarded', 2, 3, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (7100, N'2/29/2024 10:05:39 AM', N'Advance Payment Form Forwarded', 3, 2, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (7101, N'2/29/2024 10:05:59 AM', N'Advance Payment Form Forwarded', 2, 3, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (7102, N'2/29/2024 10:56:56 AM', N'Ticket Quotations Processed', 3, 1, 4010)
INSERT [dbo].[Logs] ([Id], [Date], [Event], [FromId], [ToId], [RequestId]) VALUES (7103, N'2/29/2024 11:45:15 AM', N'Ticket Quotations Processed', 3, 1, 4010)
SET IDENTITY_INSERT [dbo].[Logs] OFF
GO
SET IDENTITY_INSERT [dbo].[MoneyReceipts] ON 

INSERT [dbo].[MoneyReceipts] ([Id], [Date], [Unit], [AdvanceMoneyInHand], [Section], [I], [Designation], [RequiredTK], [Taka], [AsAdvanceAgainst], [Status], [SerialNo], [Processed], [SupervisorApproved], [Submitted], [Approvals], [CurrentHandlerId], [RequestId], [Rejected], [PrevHandlerIds], [AmountDisbursed], [BankAccountHolderName], [BankAccountNumber], [Disbursed]) VALUES (2006, N'2024-02-14', N'122', N'123123', N'', N'sdf', N'asdf', N'123123123', N'tasf', N'adgdasg', N'Being Processed', N'', 0, 1, 1, N'[{"_id":1,"empId":"0000001","empName":"asif_administration9","empCode":null,"designation":"Management Trainee Officer","mailAddress":"asif_administration@gmail.com","unit":"Corporate Office 2","section":"","wing":"","team":"","department":"administration","roles":null,"password":"123","userType":"admin","available":true,"rating":0,"raters":0,"extension":"changed","mobileNo":"12","location":"Dhaka","numbers":0,"superVisorId":1,"superVisor":{"_id":1,"empId":"0000001","empName":"asif_administration9","empCode":null,"designation":"Management Trainee Officer","mailAddress":"asif_administration@gmail.com","unit":"Corporate Office 2","section":"","wing":"","team":"","department":"administration","roles":null,"password":"123","userType":"admin","available":true,"rating":0,"raters":0,"extension":"changed","mobileNo":"12","location":"Dhaka","numbers":0,"superVisorId":1,"superVisor":null,"zonalHeadId":1,"zonalHead":null,"travelHandlerId":null,"travelHandler":null,"passportNo":null,"flyerNos":null,"preferences":"","hasFrequentFlyerNo":"","budgets":null,"requests":[],"superVised":[null],"head":[],"travelHandled":[],"currentHandled":[],"ticketApproved":[],"hotelApproved":[],"currentReceiptsHandled":[],"currentExpenseReportsHandled":[]},"zonalHeadId":1,"zonalHead":{"_id":1,"empId":"0000001","empName":"asif_administration9","empCode":null,"designation":"Management Trainee Officer","mailAddress":"asif_administration@gmail.com","unit":"Corporate Office 2","section":"","wing":"","team":"","department":"administration","roles":null,"password":"123","userType":"admin","available":true,"rating":0,"raters":0,"extension":"changed","mobileNo":"12","location":"Dhaka","numbers":0,"superVisorId":1,"superVisor":null,"zonalHeadId":1,"zonalHead":null,"travelHandlerId":null,"travelHandler":null,"passportNo":null,"flyerNos":null,"preferences":"","hasFrequentFlyerNo":"","budgets":null,"requests":[],"superVised":[],"head":[null],"travelHandled":[],"currentHandled":[],"ticketApproved":[],"hotelApproved":[],"currentReceiptsHandled":[],"currentExpenseReportsHandled":[]},"travelHandlerId":null,"travelHandler":null,"passportNo":null,"flyerNos":[],"preferences":"","hasFrequentFlyerNo":"","budgets":null,"requests":[],"superVised":[],"head":[],"travelHandled":[],"currentHandled":[],"ticketApproved":[],"hotelApproved":[],"currentReceiptsHandled":[],"currentExpenseReportsHandled":[]}]', 48, 4010, 0, N'[1]', N'asdfdf', N'asdf', N'123123', 1)
SET IDENTITY_INSERT [dbo].[MoneyReceipts] OFF
GO
SET IDENTITY_INSERT [dbo].[Notifications] ON 

INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (6044, N'Monday, February 26, 2024 3:20:06 PM', N'asif_administration9 has approved an advance payment form for sdf', 2006, 1, 48, N'moneyReceipt', N'Advance Payment Form Submitted By Supervisor')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (6047, N'Tuesday, February 27, 2024 10:50:57 AM', N'asif_administration9 has approved an expense report for the trip numbered 1002 ', 2007, 1, 48, N'expenseReport', N'ExpenseReport Submitted By Supervisor')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (6051, N'Wednesday, February 28, 2024 3:33:37 PM', N'asif_administration9 has forwarded ticket quotations for the Trip numbered B01002', 1, 1, 3, N'moneyReceipt', N'Advance Payment Form Forwarded')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (6053, N'Wednesday, February 28, 2024 4:29:19 PM', N'asif_administration9 has forwarded ticket quotations for the Trip numbered B01002', 1, 1, 2, N'moneyReceipt', N'Advance Payment Form Forwarded')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (7049, N'Thursday, February 29, 2024 9:05:14 AM', N'asif_administration9 has forwarded ticket quotations for the Trip numbered B01002', 1, 1, 1, N'moneyReceipt', N'Advance Payment Form Forwarded')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (7050, N'Thursday, February 29, 2024 9:05:31 AM', N'asif_administration9 has forwarded ticket quotations for the Trip numbered B01002', 1, 1, 1, N'moneyReceipt', N'Advance Payment Form Forwarded')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (7051, N'Thursday, February 29, 2024 9:17:42 AM', N'asif_administration9 has forwarded ticket quotations for the Trip numbered B01002', 1, 1, 2, N'moneyReceipt', N'Advance Payment Form Forwarded')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (7052, N'Thursday, February 29, 2024 9:18:09 AM', N'Nourin Zahan Elma has forwarded ticket quotations for the Trip numbered B01002', 1, 2, 3, N'moneyReceipt', N'Advance Payment Form Forwarded')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (7053, N'Thursday, February 29, 2024 10:05:39 AM', N'Taif Bin Islam has backwarded a trip numbered 1002 ', 1002, 3, 2, N'trip', N'Advance Payment Form Rejected')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (7054, N'Thursday, February 29, 2024 10:05:59 AM', N'Nourin Zahan Elma has forwarded ticket quotations for the Trip numbered B01002', 1, 2, 3, N'moneyReceipt', N'Advance Payment Form Forwarded')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (7055, N'Thursday, February 29, 2024 10:56:56 AM', N'Taif Bin Islam has completed processing the air ticket quotations for the trip numbered 1002 ', 1002, 3, 1, N'trip', N'Ticket Quotations Processed')
INSERT [dbo].[Notifications] ([Id], [Time], [Message], [SourceId], [From], [To], [Type], [Event]) VALUES (7056, N'Thursday, February 29, 2024 11:45:15 AM', N'Taif Bin Islam has completed processing the air ticket quotations for the trip numbered 1002 ', 1002, 3, 1, N'trip', N'Ticket Quotations Processed')
SET IDENTITY_INSERT [dbo].[Notifications] OFF
GO
SET IDENTITY_INSERT [dbo].[Quotations] ON 

INSERT [dbo].[Quotations] ([Id], [Linker], [QuoteGiver], [QuotationText], [Selected], [Booked], [Confirmed], [Hovered], [Custom], [RequestIds], [RequestId], [Approved], [AgentId], [TotalCosts]) VALUES (4010, N'20d259f2-dcba-445f-83c9-a349a8271ef3', N'asd', N'<div class="sun-editor-editable"><p>asd</p></div>
    
        <div>
        <span>asif_administration9</span>
        <span>123 </span>
        </div>
        
    <div>
    <span>Total Cost</span>
    <span>0123 </span>
    </div>
    ', 0, 1, 1, 0, 1, N'4010', 4010, 1, NULL, N'[{"Id":null,"Name":"","TotalCost":0}]')
SET IDENTITY_INSERT [dbo].[Quotations] OFF
GO
SET IDENTITY_INSERT [dbo].[Requests] ON 

INSERT [dbo].[Requests] ([Id], [Custom], [Objectives], [Meetings], [Items], [Personnel], [Destination], [Purpose], [Mode], [AccomodationRequired], [NumberOfNights], [TotalCost], [RequesterId], [Status], [AgentNumbers], [CurrentHandlerId], [Date], [StartDate], [EndDate], [Booked], [Confirmed], [Selected], [BeingProcessed], [Processed], [SeekingInvoices], [SeekingHotelInvoices], [InTrip], [Best], [BestHotel], [HotelBooked], [HotelConfirmed], [TicketInvoiceUploaded], [HotelInvoiceUploaded], [BudgetId], [RequestBudget], [ExpenseReportGiven], [DepartmentHeadApproved], [SupervisorApproved], [PermanentlyRejected], [Activities], [MoneyReceiptId], [MoneyReceiptSubmitted], [Approvals], [PrevHandlerIds]) VALUES (4010, 0, N' adsf', N'[{"subject":"asdf","attendees":["asdf","asdf"],"agenda":"asdf"}]', N' adsf', N' adsf', N'New York', N'buyer meeting', N'', N'', N'', 0, 1, N'Seeking Quotes For Hotel', 0, 1, N'Monday, February 26, 2024 2:27:16 PM', N'2024-02-08', N'2024-02-22', 1, 1, 0, 1, 1, 0, 0, 0, N'', N'', 1, 1, 0, 0, 1002, N'{"travelSupervisor":"asif_administration9","totalDailyAllowance":"123123","emergencyFund":"123","totalBudget":"123","approvalStatus":null,"notes":"adsf","breakdown":[{"item":"asdf","quantity":"123","cost":"123","total":"15129123"}]}', 1, 1, 1, 0, N'[{"date":"2024-02-16","description":" sadf"}]', 0, 1, N'[]', N'[]')
SET IDENTITY_INSERT [dbo].[Requests] OFF
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([Id], [Value]) VALUES (3, N'Accounts Money Receipt')
INSERT [dbo].[Roles] ([Id], [Value]) VALUES (1002, N'Travel Manager')
INSERT [dbo].[Roles] ([Id], [Value]) VALUES (1003, N'Auditor')
INSERT [dbo].[Roles] ([Id], [Value]) VALUES (1004, N'Accounts Expense Report')
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
INSERT [dbo].[TicketInvoiceQuotations] ([InvoicesId], [QuotationsId]) VALUES (2004, 4010)
GO
SET IDENTITY_INSERT [dbo].[TicketInvoices] ON 

INSERT [dbo].[TicketInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (1, N'', N'Depression Checklist_d515039d.docx', N'Depression Checklist_d515039d.docx')
INSERT [dbo].[TicketInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (2, N'', N'Depression Checklist_d46be8fc.docx', N'Depression Checklist_d46be8fc.docx')
INSERT [dbo].[TicketInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (3, N'', N'Depression Checklist_96c32dc4.pdf', N'Depression Checklist_96c32dc4.pdf')
INSERT [dbo].[TicketInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (4, N'', N'Copy of Draft International Travel Policy 2024 for Review_692a182a.docx', N'Copy of Draft International Travel Policy 2024 for Review_692a182a.docx')
INSERT [dbo].[TicketInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (1002, N'', N'Air Ticket-page-001_d8512772.jpg', N'Air Ticket-page-001_d8512772.jpg')
INSERT [dbo].[TicketInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (1003, N'', N'Hotel Booking-page-001_ea9941ce.jpg', N'Hotel Booking-page-001_ea9941ce.jpg')
INSERT [dbo].[TicketInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (1004, N'', N'Hotel Booking-page-001_41a5e108.jpg', N'Hotel Booking-page-001_41a5e108.jpg')
INSERT [dbo].[TicketInvoices] ([Id], [Type], [Filename], [FilePath]) VALUES (2004, N'', N'Screenshot 2024-02-25 163224_5ef8bd90.png', N'Screenshot 2024-02-25 163224_5ef8bd90.png')
SET IDENTITY_INSERT [dbo].[TicketInvoices] OFF
GO
INSERT [dbo].[UserRole] ([UserId], [RoleId]) VALUES (1, 1002)
INSERT [dbo].[UserRole] ([UserId], [RoleId]) VALUES (47, 1003)
INSERT [dbo].[UserRole] ([UserId], [RoleId]) VALUES (48, 3)
INSERT [dbo].[UserRole] ([UserId], [RoleId]) VALUES (48, 1004)
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (1, N'asif_administration9', NULL, N'Management Trainee Officer', N'asif_administration@gmail.com', N'Corporate Office 2', N'', N'', N'', N'administration', N'123', N'admin', 1, 0, 0, N'changed', N'12', N'Dhaka', 0, 1, 1, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (2, N'Nourin Zahan Elma', N'051185', N'Management Trainee Officer', N'nourin.elma@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01799207149', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (3, N'Taif Bin Islam', N'051916', N'Officer', N'taifhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01976794655', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (4, N'Elahi Siam', NULL, N'Officer', N'elahi.siam@hameemgroup.com', N'Corporate Office 2', N'', N'', N'', N'PSM-Foreign', N'123', N'auditor', 1, 0, 0, N'', N'', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (5, N'Soumik Sarker', NULL, N'Officer', N'soumik.sarker@hameemgroup.com', N'Corporate Office', N'', N'', N'', N'PSM-Foreign', N'123', N'normal', 1, 0, 0, N'', N'', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (6, N'Md. Shohel Rana', N'057489', N'Chief Information Officer', N'shohel.rana@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'Ticket Manager (Department)', 1, 0, 0, N'Not Available', N'01766664661', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (7, N'Rahajul Amin Shuvo', N'001548', N'Assistant Manager', N'shuvo.it@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'shuvo123', N'support', 1, 0, 0, N'Not Available', N'01313712192', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (8, N'Mr. Md. Homayun Kabir', N'004502', N'Senior Software Engineer', N'homayun.it@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123456', N'support', 1, 0, 0, N'Not Available', N'01937940626', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (9, N'Rabiul Islam', N'006725', N'Officer', N'rabiulhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01742095736', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (10, N'Md. Salah Uddin', N'010558', N'Assistant Merchandiser', N'salahuddin58@hameemgroup.com', N'Corporate Office Tongi Zone', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01637545734', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (11, N'Md. Iqbal Hossain', N'005732', N'Senior Merchandiser', N'iqbal@hameemgroup.com', N'Corporate Office Tongi Zone', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01613099722', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (12, N'Md. Ashiqur Rahman', N'009311', N'Manager (Human Resource)', N'ashiqhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01725995811', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (13, N'Toufique Hasan', N'004263', N'Software Engineer', N'toufique.it@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01911928011', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (14, N'Md. Taifur Rahman', N'008540', N'Manager (Human Resource)', N'taifurhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01911254390', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (15, N'Shahinur Akter', N'001101', N'Assistant Manager', N'shahinur@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01925009789', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (16, N'Khondaker Shafiqul Alam', N'008490', N'Assistant Manager', N'shafiqulhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01709332615', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (17, N'Nusrat Jahan Nayan', N'004933', N'Assistant Manager (Human Resource)', N'nusrathr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01783636648', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (18, N'Md. Mosharrof Hossain', N'006726', N'Senior Officer', N'mosharrofhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01676090281', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (19, N'Mst. Farzana Akter', N'003478', N'Senior Officer', N'farzanahr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01789710323', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (20, N'M.M. Moniruzzaman', N'006677', N'Officer', N'monirhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01739842371', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (21, N'Arundhuti Roy', N'004483', N'Senior Officer', N'arundhutihr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01716343544', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (22, N'Mohona Jahan Muna', N'004677', N'Senior Officer', N'mohona@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01711091065', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (23, N'Ishrat Zahan Shomi', N'004966', N'Senior Officer', N'ishrathr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01955311703', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (24, N'Faria Naznin', N'006107', N'Officer', N'nazninhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01738052464', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (25, N'Touhedul Islam', N'013904', N'Senior Officer', N'touhedhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01886641434', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (26, N'Syeda Anjumanara Tripty', N'011890', N'Officer', N'triptyhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01771061102', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (27, N'Sajjad Hossain', N'013897', N'Officer', N'sajjadhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01677509631', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (28, N'Zumur Saha', N'013414', N'Officer', N'zhumurhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01701933565', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (29, N'Md. Faruque Hossain', N'000336', N'Assistant General Manager', N'faruque@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'leader', 1, 0, 0, N'Not Available', N'01712-783777', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (30, N'Sk. Shafiqul Islam', N'002511', N'Cinematographer', N'shafiqav@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01840101010', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (31, N'Md. Maynul Hasan', N'006896', N'Manager', N'maynulav@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01646604383', N'Not Available', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (32, N'Mehedee Hassan', N'012128', N'Head of Visual R&D', N'mehedee@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01720026832', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (33, N'Md. Torab Hosen', N'004159', N'Senior Officer', N'torab@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01719306012', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (34, N'Rafiqul Islam', N'004160', N'Senior Officer', N'osrow@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01718528325', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (35, N'Mr. Yousub Ali', N'000234', N'Assistant Manager', N'yousub@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01710-655735', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (36, N'Md. Rohul Islam', N'000777', N'System Engineer', N'rohul.it@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01682400249', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (37, N'Mohammad Aslam Aziz', N'001060', N'Senior System Engineer', N'aslam.it@hameemgroup.com', N'Corporate Office', N'', N'', N'', N'IT', N'123', N'normal', 1, 0, 0, N'Not Available', N'01313712607', N'Dhaka', 0, 1, 1, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (38, N'Md. Shaidul Islam Anik', N'011117', N'System Engineer', N'anik.it@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01714780927', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (39, N'Asib Al Hasan', N'036433', N'Assistant Software Engineer', N'asib.it@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01904563898', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (40, N'Tamal Mazumder', N'053324', N'Software Support Engineer', N'tamal.it@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01313712190', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (41, N'Muhammad Ariful Islam', N'001666', N'Technician', N'telecom.arif@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'support', 1, 0, 0, N'Not Available', N'01970274385', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (42, N'Jinnat Afrin', N'051372', N'Officer', N'afrinhr@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01625002960', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (43, N'Imran Ahmed', N'057323', N'General Manager', N'imran.ahmed@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01731311914', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (44, N'Md. Golam Muktadir Asif', N'051188', N'Management Trainee Officer', N'md.asif@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01751634503', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (45, N'Nazmut Shahadat Khan', N'016246', N'Assistant General Manager', N'nazmut@hameemgroup.com', N'Textile Head Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01912677546', N'Dhaka', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (46, N'Syed Abu Md Saleh', N'000181', N'Senior General Manager', N'saleh@hameemgroup.com', N'Corporate Office', N'', N'', N'', NULL, N'123', N'normal', 1, 0, 0, N'Not Available', N'01711802811', N'Not Available', 0, NULL, NULL, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (47, N'asif_audit', NULL, N'Management Trainee Officer', N'asif_audit@gmail.com', N'Corporate Office', N'', N'', N'', N'administration', N'123', N'normal', 1, 0, 0, N'asasd121212', N'12', N'Dhaka', 0, 1, 1, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (48, N'asif_marketing', NULL, N'Management Trainee Officer', N'asif_marketing@gmail.com', N'Corporate Office', N'', N'', N'', N'administration', N'123', N'normal', 1, 0, 0, N'asasd121212', N'12', N'Dhaka', 0, 1, 1, NULL, NULL, N'', N'')
INSERT [dbo].[Users] ([Id], [EmpName], [EmpCode], [Designation], [MailAddress], [Unit], [Section], [Wing], [Team], [Department], [Password], [UserType], [Available], [Rating], [Raters], [Extension], [MobileNo], [Location], [Numbers], [SuperVisorId], [ZonalHeadId], [TravelHandlerId], [PassportNo], [Preferences], [HasFrequentFlyerNo]) VALUES (49, N'asif_merchandising', NULL, N'Management Trainee Officer', N'asif_merchandising@gmail.com', N'Corporate Office', N'', N'', N'', N'administration', N'123', N'normal', 1, 0, 0, N'asasd121212', N'12', N'Dhaka', 0, 1, 1, NULL, NULL, N'', N'')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[BudgetTicketApprovals]  WITH CHECK ADD  CONSTRAINT [FK_BudgetTicketApprovals_Budgets_BudgetId] FOREIGN KEY([BudgetId])
REFERENCES [dbo].[Budgets] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[BudgetTicketApprovals] CHECK CONSTRAINT [FK_BudgetTicketApprovals_Budgets_BudgetId]
GO
ALTER TABLE [dbo].[BudgetTicketApprovals]  WITH CHECK ADD  CONSTRAINT [FK_BudgetTicketApprovals_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[BudgetTicketApprovals] CHECK CONSTRAINT [FK_BudgetTicketApprovals_Users_UserId]
GO
ALTER TABLE [dbo].[BudgetTravelers]  WITH CHECK ADD  CONSTRAINT [FK_BudgetTravelers_Budgets_BudgetsId] FOREIGN KEY([BudgetsId])
REFERENCES [dbo].[Budgets] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[BudgetTravelers] CHECK CONSTRAINT [FK_BudgetTravelers_Budgets_BudgetsId]
GO
ALTER TABLE [dbo].[BudgetTravelers]  WITH CHECK ADD  CONSTRAINT [FK_BudgetTravelers_Users_TravelersId] FOREIGN KEY([TravelersId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[BudgetTravelers] CHECK CONSTRAINT [FK_BudgetTravelers_Users_TravelersId]
GO
ALTER TABLE [dbo].[Costs]  WITH CHECK ADD  CONSTRAINT [FK_Costs_Requests_RequestId] FOREIGN KEY([RequestId])
REFERENCES [dbo].[Requests] ([Id])
GO
ALTER TABLE [dbo].[Costs] CHECK CONSTRAINT [FK_Costs_Requests_RequestId]
GO
ALTER TABLE [dbo].[ExpenseReports]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseReports_Requests_RequestId] FOREIGN KEY([RequestId])
REFERENCES [dbo].[Requests] ([Id])
GO
ALTER TABLE [dbo].[ExpenseReports] CHECK CONSTRAINT [FK_ExpenseReports_Requests_RequestId]
GO
ALTER TABLE [dbo].[ExpenseReports]  WITH CHECK ADD  CONSTRAINT [FK_ExpenseReports_Users_CurrentHandlerId] FOREIGN KEY([CurrentHandlerId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[ExpenseReports] CHECK CONSTRAINT [FK_ExpenseReports_Users_CurrentHandlerId]
GO
ALTER TABLE [dbo].[Expenses]  WITH CHECK ADD  CONSTRAINT [FK_Expenses_ExpenseReports_ExpenseReportId] FOREIGN KEY([ExpenseReportId])
REFERENCES [dbo].[ExpenseReports] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Expenses] CHECK CONSTRAINT [FK_Expenses_ExpenseReports_ExpenseReportId]
GO
ALTER TABLE [dbo].[FlyerNos]  WITH CHECK ADD  CONSTRAINT [FK_FlyerNos_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[FlyerNos] CHECK CONSTRAINT [FK_FlyerNos_Users_UserId]
GO
ALTER TABLE [dbo].[HotelApprovals]  WITH CHECK ADD  CONSTRAINT [FK_HotelApprovals_HotelQuotations_HotelApprovedId] FOREIGN KEY([HotelApprovedId])
REFERENCES [dbo].[HotelQuotations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[HotelApprovals] CHECK CONSTRAINT [FK_HotelApprovals_HotelQuotations_HotelApprovedId]
GO
ALTER TABLE [dbo].[HotelApprovals]  WITH CHECK ADD  CONSTRAINT [FK_HotelApprovals_Users_HotelApprovalsId] FOREIGN KEY([HotelApprovalsId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[HotelApprovals] CHECK CONSTRAINT [FK_HotelApprovals_Users_HotelApprovalsId]
GO
ALTER TABLE [dbo].[HotelInvoiceQuotations]  WITH CHECK ADD  CONSTRAINT [FK_HotelInvoiceQuotations_HotelInvoices_InvoicesId] FOREIGN KEY([InvoicesId])
REFERENCES [dbo].[HotelInvoices] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[HotelInvoiceQuotations] CHECK CONSTRAINT [FK_HotelInvoiceQuotations_HotelInvoices_InvoicesId]
GO
ALTER TABLE [dbo].[HotelInvoiceQuotations]  WITH CHECK ADD  CONSTRAINT [FK_HotelInvoiceQuotations_HotelQuotations_QuotationsId] FOREIGN KEY([QuotationsId])
REFERENCES [dbo].[HotelQuotations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[HotelInvoiceQuotations] CHECK CONSTRAINT [FK_HotelInvoiceQuotations_HotelQuotations_QuotationsId]
GO
ALTER TABLE [dbo].[HotelLocations]  WITH CHECK ADD  CONSTRAINT [FK_HotelLocations_HotelForBrands_HotelForBrandsId] FOREIGN KEY([HotelForBrandsId])
REFERENCES [dbo].[HotelForBrands] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[HotelLocations] CHECK CONSTRAINT [FK_HotelLocations_HotelForBrands_HotelForBrandsId]
GO
ALTER TABLE [dbo].[HotelQuotations]  WITH CHECK ADD  CONSTRAINT [FK_HotelQuotations_Agents_AgentId] FOREIGN KEY([AgentId])
REFERENCES [dbo].[Agents] ([Id])
GO
ALTER TABLE [dbo].[HotelQuotations] CHECK CONSTRAINT [FK_HotelQuotations_Agents_AgentId]
GO
ALTER TABLE [dbo].[HotelQuotations]  WITH CHECK ADD  CONSTRAINT [FK_HotelQuotations_Requests_RequestId] FOREIGN KEY([RequestId])
REFERENCES [dbo].[Requests] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[HotelQuotations] CHECK CONSTRAINT [FK_HotelQuotations_Requests_RequestId]
GO
ALTER TABLE [dbo].[Hotels]  WITH CHECK ADD  CONSTRAINT [FK_Hotels_HotelLocations_HotelLocationsId] FOREIGN KEY([HotelLocationsId])
REFERENCES [dbo].[HotelLocations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Hotels] CHECK CONSTRAINT [FK_Hotels_HotelLocations_HotelLocationsId]
GO
ALTER TABLE [dbo].[Logs]  WITH CHECK ADD  CONSTRAINT [FK_Logs_Requests_RequestId] FOREIGN KEY([RequestId])
REFERENCES [dbo].[Requests] ([Id])
GO
ALTER TABLE [dbo].[Logs] CHECK CONSTRAINT [FK_Logs_Requests_RequestId]
GO
ALTER TABLE [dbo].[Messages]  WITH CHECK ADD  CONSTRAINT [FK_Messages_Requests_RequestId] FOREIGN KEY([RequestId])
REFERENCES [dbo].[Requests] ([Id])
GO
ALTER TABLE [dbo].[Messages] CHECK CONSTRAINT [FK_Messages_Requests_RequestId]
GO
ALTER TABLE [dbo].[MoneyReceipts]  WITH CHECK ADD  CONSTRAINT [FK_MoneyReceipts_Requests_RequestId] FOREIGN KEY([RequestId])
REFERENCES [dbo].[Requests] ([Id])
GO
ALTER TABLE [dbo].[MoneyReceipts] CHECK CONSTRAINT [FK_MoneyReceipts_Requests_RequestId]
GO
ALTER TABLE [dbo].[MoneyReceipts]  WITH CHECK ADD  CONSTRAINT [FK_MoneyReceipts_Users_CurrentHandlerId] FOREIGN KEY([CurrentHandlerId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[MoneyReceipts] CHECK CONSTRAINT [FK_MoneyReceipts_Users_CurrentHandlerId]
GO
ALTER TABLE [dbo].[Quotations]  WITH CHECK ADD  CONSTRAINT [FK_Quotations_Agents_AgentId] FOREIGN KEY([AgentId])
REFERENCES [dbo].[Agents] ([Id])
GO
ALTER TABLE [dbo].[Quotations] CHECK CONSTRAINT [FK_Quotations_Agents_AgentId]
GO
ALTER TABLE [dbo].[Quotations]  WITH CHECK ADD  CONSTRAINT [FK_Quotations_Requests_RequestId] FOREIGN KEY([RequestId])
REFERENCES [dbo].[Requests] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Quotations] CHECK CONSTRAINT [FK_Quotations_Requests_RequestId]
GO
ALTER TABLE [dbo].[RequestAgents]  WITH CHECK ADD  CONSTRAINT [FK_RequestAgents_Agents_AgentsId] FOREIGN KEY([AgentsId])
REFERENCES [dbo].[Agents] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RequestAgents] CHECK CONSTRAINT [FK_RequestAgents_Agents_AgentsId]
GO
ALTER TABLE [dbo].[RequestAgents]  WITH CHECK ADD  CONSTRAINT [FK_RequestAgents_Requests_RequestsId] FOREIGN KEY([RequestsId])
REFERENCES [dbo].[Requests] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RequestAgents] CHECK CONSTRAINT [FK_RequestAgents_Requests_RequestsId]
GO
ALTER TABLE [dbo].[Requests]  WITH CHECK ADD  CONSTRAINT [FK_Requests_Budgets_BudgetId] FOREIGN KEY([BudgetId])
REFERENCES [dbo].[Budgets] ([Id])
GO
ALTER TABLE [dbo].[Requests] CHECK CONSTRAINT [FK_Requests_Budgets_BudgetId]
GO
ALTER TABLE [dbo].[Requests]  WITH CHECK ADD  CONSTRAINT [FK_Requests_Users_CurrentHandlerId] FOREIGN KEY([CurrentHandlerId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Requests] CHECK CONSTRAINT [FK_Requests_Users_CurrentHandlerId]
GO
ALTER TABLE [dbo].[Requests]  WITH CHECK ADD  CONSTRAINT [FK_Requests_Users_RequesterId] FOREIGN KEY([RequesterId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Requests] CHECK CONSTRAINT [FK_Requests_Users_RequesterId]
GO
ALTER TABLE [dbo].[TicketApprovals]  WITH CHECK ADD  CONSTRAINT [FK_TicketApprovals_Quotations_TicketApprovedId] FOREIGN KEY([TicketApprovedId])
REFERENCES [dbo].[Quotations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TicketApprovals] CHECK CONSTRAINT [FK_TicketApprovals_Quotations_TicketApprovedId]
GO
ALTER TABLE [dbo].[TicketApprovals]  WITH CHECK ADD  CONSTRAINT [FK_TicketApprovals_Users_TicketApprovalsId] FOREIGN KEY([TicketApprovalsId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TicketApprovals] CHECK CONSTRAINT [FK_TicketApprovals_Users_TicketApprovalsId]
GO
ALTER TABLE [dbo].[TicketInvoiceQuotations]  WITH CHECK ADD  CONSTRAINT [FK_TicketInvoiceQuotations_Quotations_QuotationsId] FOREIGN KEY([QuotationsId])
REFERENCES [dbo].[Quotations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TicketInvoiceQuotations] CHECK CONSTRAINT [FK_TicketInvoiceQuotations_Quotations_QuotationsId]
GO
ALTER TABLE [dbo].[TicketInvoiceQuotations]  WITH CHECK ADD  CONSTRAINT [FK_TicketInvoiceQuotations_TicketInvoices_InvoicesId] FOREIGN KEY([InvoicesId])
REFERENCES [dbo].[TicketInvoices] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TicketInvoiceQuotations] CHECK CONSTRAINT [FK_TicketInvoiceQuotations_TicketInvoices_InvoicesId]
GO
ALTER TABLE [dbo].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_UserRole_Roles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserRole] CHECK CONSTRAINT [FK_UserRole_Roles_RoleId]
GO
ALTER TABLE [dbo].[UserRole]  WITH CHECK ADD  CONSTRAINT [FK_UserRole_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserRole] CHECK CONSTRAINT [FK_UserRole_Users_UserId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Users_SuperVisorId] FOREIGN KEY([SuperVisorId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Users_SuperVisorId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Users_TravelHandlerId] FOREIGN KEY([TravelHandlerId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Users_TravelHandlerId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Users_ZonalHeadId] FOREIGN KEY([ZonalHeadId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Users_ZonalHeadId]
GO
