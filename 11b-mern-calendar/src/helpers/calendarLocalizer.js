//Importaciones de Terceros:
import { dateFnsLocalizer } from 'react-big-calendar';
import { format, getDay, parse, startOfWeek } from 'date-fns';

import enUS from 'date-fns/locale/en-US';
import esES from 'date-fns/locale/es';


//Constante idiomas de calendar dependency:
const locales = {
    'en-US': enUS,
    'es': esES
};


export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});