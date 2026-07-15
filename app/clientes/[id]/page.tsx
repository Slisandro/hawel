import ClientWrapper from "@/components/client-wrapper.components";
import { AppNavbar } from "@/components/navbar.components";

// Definir interfaces necesarias para Server Component
enum Filter {
    All = "all",
    Day = "day",
    AtRisk = "at_risk"
}

interface DetailClient {
    id: string;
    name: string;
    location: string;
    status: Filter;
    lastPurchaseDays?: number;
    dateEntrega?: string;
    cxd: string;
    details?: {
        clients: { name: string; quantity: number; unitPrice: number; total: number }[];
    };
}

// Esta es la función que genera las páginas estáticas (solo funciona en Server Component)
export async function generateStaticParams() {
    const mockClients: DetailClient[] = [
        {
            id: "CLI-10024",
            name: "Distribuidora Mundo Vegetal",
            location: "Bahía Blanca - Centro",
            status: Filter.Day,
            lastPurchaseDays: 3,
            cxd: "1/5 d",
        },
        {
            id: "CLI-10025",
            name: "Almacén El Cóndor",
            location: "Bahía Blanca - Norte",
            status: Filter.AtRisk,
            lastPurchaseDays: 22,
            cxd: "1/3 d",
        },
        {
            id: "CLI-10026",
            name: "Mini Cooperativa Obrera",
            location: "Punta Alta",
            status: Filter.Day,
            lastPurchaseDays: 2,
            cxd: "1/4 d",
        },
        {
            id: "CLI-10027",
            name: "Autoservicio San Martín",
            location: "Bahía Blanca - Sur",
            status: Filter.Day,
            lastPurchaseDays: 4,
            cxd: "1/6 d",
        },
        {
            id: "CLI-10028",
            name: "Stanich Cristian",
            location: "Ingeniero White",
            status: Filter.AtRisk,
            lastPurchaseDays: 18,
            cxd: "1/2 d",
        }
    ];

    return mockClients.map((cliente) => ({
        id: cliente.id,
    }));
}

// Función para obtener datos del cliente (puede ser async)
async function getClientData(id: string): Promise<DetailClient> {
    // Aquí puedes hacer fetch a tu API, base de datos, etc.
    const mockClients: DetailClient[] = [
        {
            id: "CLI-10024",
            name: "Distribuidora Mundo Vegetal",
            location: "Bahía Blanca - Centro",
            status: Filter.Day,
            lastPurchaseDays: 3,
            cxd: "1/5 d",
        },
        {
            id: "CLI-10025",
            name: "Almacén El Cóndor",
            location: "Bahía Blanca - Norte",
            status: Filter.AtRisk,
            lastPurchaseDays: 22,
            cxd: "1/3 d",
        },
        {
            id: "CLI-10026",
            name: "Mini Cooperativa Obrera",
            location: "Punta Alta",
            status: Filter.Day,
            lastPurchaseDays: 2,
            cxd: "1/4 d",
        },
        {
            id: "CLI-10027",
            name: "Autoservicio San Martín",
            location: "Bahía Blanca - Sur",
            status: Filter.Day,
            lastPurchaseDays: 4,
            cxd: "1/6 d",
        },
        {
            id: "CLI-10028",
            name: "Stanich Cristian",
            location: "Ingeniero White",
            status: Filter.AtRisk,
            lastPurchaseDays: 18,
            cxd: "1/2 d",
        }
    ];

    const client = mockClients.find(c => c.id === id);
    if (!client) {
        throw new Error('Cliente no encontrado');
    }
    return client;
}

// Server Component principal
export default async function ClientIdPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    // Obtener datos del cliente en el servidor
    const client = await getClientData(id);

    // Pasar los datos al Client Component
    return (
        <div className="flex flex-col gap-2 min-h-[100vh]">
            <AppNavbar />
            <main className="py-1 px-3 md:px-4 flex flex-col gap-2 flex-1 min-h-0 mb-2">
                <ClientWrapper client={client} />
            </main>
        </div>
    )

}