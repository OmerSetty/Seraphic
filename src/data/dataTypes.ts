export type eventDataType = {
  'Date': string,
  'General': {
    'Event ID': string,
    'Host ID': string,
    'Email': string,
    'User name': string,
  },
  'Details': {
    'File name': string,
    'URL': {
      'isURL': boolean,
      'value': string
    },
    'Mine type': string,
    'Assoicated Alerts': number,
    'Assoicated Policies': number,
  },
  'Agents': {
    'Environment': string,
    'Version': string,
    'IP': string,
  },
  'Assoicated Alerts': {
    'Version': string,
  },
}

export type agentDataType = {
  'Associated Alerts': {
    'Total Alerts': {
      'value': number,
      'change': string,
    },
    'Total Events': {
      'value': number,
      'change': string,
    },
    'Installed endpoints': {
      'value': string,
      'change': null,
    },
  },
  'Assigned policy group': {
    'Assigned policy group': string
  },
  'Meta data': {
    'Attached host name': string,
    'User Name': string,
    'User SID': string,
    'SID': string,
    'Browser': string,
    'OS': {
      'iconName': string
    },
    'RAM': string,
    'Disk': string,
    'User agent address': string,
    'User domain': string,
  },
  'Status': {
    'Sorting Options': string[],
    'Percentage': number,
    'Distribution': string[],
    'Distribution Jumps': string[],
  },
};