import { 
  Eye, 
  FileText, 
  Receipt, 
  FileCheck, 
  FileSpreadsheet, 
  DollarSign, 
  MessageSquare, 
  Phone, 
  Briefcase, 
  Building2, 
  Scale, 
  BookOpen, 
  Newspaper, 
  Radar, 
  ClipboardCheck, 
  FileSearch,
  Clock,
  Calendar,
  Folder,
  Users
} from 'lucide-vue-next'

export interface Servico {
  nome: string
  link: string
  icone: string
}

const iconMap: Record<string, any> = {
  Eye,
  FileText,
  Receipt,
  FileCheck,
  FileSpreadsheet,
  DollarSign,
  MessageSquare,
  Phone,
  Briefcase,
  Building2,
  Scale,
  BookOpen,
  Newspaper,
  Radar,
  ClipboardCheck,
  FileSearch,
  Clock,
  Calendar,
  Folder,
  Users
}

export const getIcon = (iconName: string) => {
  return iconMap[iconName] || Eye
}

export const servicosDigitais: Servico[] = [
    { nome: 'Portal da Transparência', link: '#', icone: 'Eye' },
    { nome: 'Processos Licitatórios', link: '#', icone: 'FileText' },
    { nome: 'ITBI Online', link: '#', icone: 'Receipt' },
    { nome: 'Alvará Online', link: '#', icone: 'FileCheck' },
    { nome: 'Nota Fiscal Eletrônica', link: '#', icone: 'FileSpreadsheet' },
    { nome: 'Tributos Web', link: '#', icone: 'DollarSign' },
    { nome: 'Ouvidoria', link: '#', icone: 'MessageSquare' },
    { nome: 'Fale Conosco', link: '#', icone: 'Phone' },
    { nome: 'Concursos', link: '#', icone: 'Briefcase' },
    { nome: 'Sala do empreendedor', link: '#', icone: 'Building2' },
    { nome: 'Câmara Municipal', link: '#', icone: 'Scale' },
    { nome: 'Leis Municipais Atos Oficiais', link: '#', icone: 'BookOpen' },
    { nome: 'Diário Oficial', link: '#', icone: 'Newspaper' },
    { nome: 'Radar da Transparência', link: '#', icone: 'Radar' },
    { nome: 'Pesquisa de Satisfação', link: '#', icone: 'ClipboardCheck' },
    { nome: 'Carta de Serviços', link: '#', icone: 'FileSearch' },
  ]

export const servicosServidor: Servico[] = [
    { nome: 'Contracheque', link: '#', icone: 'FileSpreadsheet' },
    { nome: 'Ponto Eletrônico', link: '#', icone: 'Clock' },
    { nome: 'Férias', link: '#', icone: 'Calendar' },
    { nome: 'Licenças', link: '#', icone: 'FileCheck' },
    { nome: 'Documentos', link: '#', icone: 'Folder' },
    { nome: 'RH Digital', link: '#', icone: 'Users' },
  ]