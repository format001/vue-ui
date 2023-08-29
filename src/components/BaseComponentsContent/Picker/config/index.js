import { getRange } from '../utils/date'

export const defaultPresets = [
    {
        label: 'Today',
        range: getRange(0, 0),
    },
    {
        label: 'Yesterday',
        range: getRange(1, 1),
    },
    {
        label: 'Last 7 Days',
        range: getRange(6, 0),
    },
    {
        label: 'Last 30 Days',
        range: getRange(29, 0),
    },
    {
        label: 'This Month',
        range: getRange(0, 0, 'month'),
    },
    {
        label: 'Last Month',
        range: getRange(1, 1, 'month'),
    },
];

export const WEEKDAY = [ '日', '一', '二', '三', '四', '五', '六' ];