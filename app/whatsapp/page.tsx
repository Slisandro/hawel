"use client";
import { AppNavbar } from "@/components/navbar.components";
import { Badge } from "@/components/ui/badge";
import { Search, MoreVertical, ArrowLeft, Send, Paperclip, Mic, CheckCheck, Archive, BookText, Store, Box, Bot, SquareCheckBig } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";

export default function WhatsAppPage() {
    return (
        <div className="min-h-svh flex flex-col h-[100vh] bg-gray-100 dark:bg-gray-900">
            <AppNavbar />

            <main className="flex flex-1 min-h-0 px-10 py-6 rounded-md">
                {/* Panel izquierdo - Lista de conversaciones */}
                <div className="rounded-l-lg w-full md:w-[300px] lg:w-[400px] border-l-1 border-t-1 border-b-2 border-gray-200 dark:border-gray-700 flex flex-col bg-white dark:bg-gray-800 gap-2">
                    {/* Header del panel izquierdo */}
                    <div className="p-3 border-gray-200 rounded-md dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-800">
                        <div className="flex items-center gap-3 mt-2 ml-2">
                            {/* Icono de atras */}
                            <ArrowLeft className="w-5 h-5 text-gray-800 dark:text-gray-100" />
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">WhatsApp</h2>
                        </div>
                    </div>

                    {/* Buscador */}
                    <div className="p-3 relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            value="5491167247232"
                            onChange={() => { }}
                            placeholder="Buscar conversación..."
                            className="px-4 mx-auto py-3 pl-10 w-full rounded-full text-md ring-0 outline-none border shadow-md"
                        />
                    </div>

                    <div className="px-3 relative flex items-center gap-3">
                        <SelectComponent defaultValue="all" items={[{ value: "all", label: "Todos" }]} />
                        <SelectComponent defaultValue="all" items={[{ value: "all", label: "Tipo" }]} />
                        <SelectComponent defaultValue="all" items={[{ value: "all", label: "Estado del bot" }]} />
                        <SelectComponent defaultValue="all" items={[{ value: "all", label: "Más" }]} className="bg-lime-300 border-lime-300" />
                    </div>

                    <p className="px-4 py-2 text-md text-gray-700 dark:text-gray-100 font-semibold">Chats</p>

                    {/* Lista de conversaciones */}
                    <div className="overflow-y-auto rounded-md px-3">
                        {/* Conversación 1 */}
                        <div className="flex items-start gap-3 rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors border-b border-gray-100 relative dark:border-gray-700 bg-gray-200">
                            {/* Quitar un div absolute posicionado a la mitad del contenedor  */}
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-10 w-1.5 rounded-r-sm  bg-gray-500 dark:bg-gray-400" />
                            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                RM
                            </div>
                            <div className="flex-1 min-w-0 flex gap-1 flex-col">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium text-gray-800 dark:text-gray-100 truncate">Rincon Maceda - Martes</h3>
                                    <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0 ml-2">11:59</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center truncate">
                                    <CheckCheck className="w-4 h-4 inline-block mr-1" />
                                    De nada, Flor. Cualquier cosa que c...
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="secondary" className="
                                    font-semibold
                                    /* Modo claro */
                                    bg-[#E8F9F4] 
                                    text-[#0B8A6E] 
                                    border-[#99E8D2]
                                    
                                    /* Modo oscuro */
                                    dark:bg-[#1A3D35] 
                                    dark:text-[#4AD9B0] 
                                    dark:border-[#4AD9B0]
                                ">
                                        <Archive className="w-4 h-4 inline-block mr-1" />
                                        Archivada
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="px-4 py-2 text-md text-gray-700 dark:text-gray-100 font-semibold">Mensajes</p>

                    {/* Mensaje de "No se encontro" */}
                    <div className="px-4 text-center text-gray-400 dark:text-gray-500 text-sm">
                        No se encontraron mensajes
                    </div>
                </div>

                {/* Panel derecho - Detalle de conversación */}
                <div className="hidden rounded-md md:flex flex-1 flex-col bg-gray-50 dark:bg-gray-900/50 bg-image bg-no-repeat bg-cover bg-center rounded-r-lg border border-1 border-gray-200 dark:border-gray-700" style={{ backgroundImage: "url('/bg-wsp.webp')" }}>
                    {/* Header del panel derecho */}
                    <div className="p-3 border-b rounded-tr-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center gap-3">
                        <div className="flex flex-1 items-center gap-3">
                            <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                                <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            </button>
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                                RM
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-gray-800 dark:text-gray-100">Rison Maceda - Martes</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">En línea</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <BookText className="w-4 h-4 mx-2 text-gray-600 dark:text-gray-300" />

                            <Store className="w-4 h-4 mx-2 text-gray-600 dark:text-gray-300" />

                            <div className="w-[1px] h-4 bg-gray-300 dark:bg-gray-600" />

                            <Box className="w-4 h-4 mx-2 text-gray-600 dark:text-gray-300" />

                            <div className="w-[1px] h-4 bg-gray-300 dark:bg-gray-600" />

                            <Bot className="w-5 h-5 mx-2 text-gray-600 dark:text-gray-300" />
                            <SquareCheckBig className="w-4 h-4 mx-2 text-gray-600 dark:text-gray-300" />
                        </div>
                    </div>

                    {/* Área de mensajes */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {/* Mensaje recibido */}
                        <div className="flex justify-start">
                            <div className="max-w-[70%] bg-white dark:bg-gray-800 rounded-lg rounded-bl-none p-3 shadow-sm">
                                <p className="text-gray-800 dark:text-gray-100 text-sm">Prueba de texto</p>
                                <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 block text-right">10:30</span>
                            </div>
                        </div>

                        {/* Mensaje enviado */}
                        <div className="flex justify-end">
                            <div className="max-w-[70%] bg-green-500 dark:bg-green-600 rounded-lg rounded-br-none p-3 shadow-sm">
                                <p className="text-white text-sm">Prueba de texto</p>
                                <span className="text-xs text-green-100 mt-1 block text-right">10:32</span>
                            </div>
                        </div>
                    </div>

                    {/* Input de mensaje */}
                    <div className="p-3 border-t rounded-br-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 relative">
                        <div className="flex items-center gap-2">
                            <textarea
                                placeholder="Escriba un mensaje..."
                                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 shadow-sm rounded-lg text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 h-20"
                                style={{ resize: 'none' }}
                            />

                            <div className="flex items-center gap-4 absolute bottom-5 left-6 right-3 px-3 py-1 rounded-full text-xs">
                                <Badge
                                    variant="secondary"
                                    className="
                                        px-3 py-1 rounded-full text-xs    
                                        font-semibold
                                        /* Modo claro */
                                        bg-[#E8F9F4] 
                                        text-[#0B8A6E] 
                                        border-[#99E8D2]"
                                >
                                    <Bot className="w-4 h-4 inline-block mr-1" />
                                    Bot activado
                                </Badge>
                            </div>

                            <div className="flex items-center gap-4 absolute bottom-5 right-6 right-3 px-3 py-1 rounded-full text-xs">
                                <Paperclip className="w-4 h-4 inline-block" />
                                <Mic className="w-4 h-4 inline-block" />
                                <div className="flex items-center gap-2 bg-gray-500 rounded-full p-2">
                                    <Send className="w-4 h-4 inline-block text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export function SelectComponent({ defaultValue, items, ...props }: { defaultValue?: string; items: { value: string; label: string }[], className?: string }) {
    return (
        <Select defaultValue={defaultValue}>
            <SelectTrigger className={cn("!w-[max-content] rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-2 flex items-center py-1 text-xs !h-[max-content] font-medium shadow-xs hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400", props.className)}>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
