import { eventDataType } from "./dataTypes";

export let eventData: eventDataType = {
  'Date': '15.12.2021 14:23:23',
  'General': {
    'Event ID': '73',
    'Host ID': '22cs.23ab_46.67ccgf223',
    'Email': 'Libat@inkod.com',
    'User name': 'N/A',
  },
  'Details': {
    'File name': 'C:\\Users\\sharondagan\\do...',
    'URL': {
      'isURL': true,
      'value': 'https://www.google.com/h?...'
    },
    'Mine type': 'Application/pdf',
    'Assoicated Alerts': 4,
    'Assoicated Policies': 4,
  },
  'Agents': {
    'Environment': 'Libat@inkod.com',
    'Version': '97.02988.3312.12',
    'IP': '192.168.56.1,192.168.1.100',
  },
  'Assoicated Alerts': {
    'Version': '97.02988.3312.12',
  },
}

setInterval(() => {
  eventData.Details["Assoicated Policies"]++;
}, 2000)