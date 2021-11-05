//////////////////////////////////////////////////////////
// Using Moment.js
//////////////////////////////////////////////////////////

// import moment from 'moment'

// export const formatDate = (dateString, desiredFormat) =>
//   moment(dateString).format(desiredFormat)

// export const formatRelativeTimeToNow = (dateString) =>
//   moment(dateString).fromNow()

//////////////////////////////////////////////////////////
// Using Day.js
//////////////////////////////////////////////////////////

// import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'

// dayjs.extend(relativeTime)

// export const formatDate = (dateString, desiredFormat) =>
//   dayjs(dateString).format(desiredFormat)

// export const formatRelativeTimeToNow = (dateString) =>
//   dayjs(dateString).fromNow()

//////////////////////////////////////////////////////////
// Using date-fns
//////////////////////////////////////////////////////////

// import { format, formatDistanceToNow } from 'date-fns'

// export const formatDate = (dateString, desiredFormat) => {
//   try {
//     return format(new Date(dateString), desiredFormat)
//   } catch (e) {
//     return 'Invalid Date'
//   }
// }

// export const formatRelativeTimeToNow = (dateString) => {
//   try {
//     return formatDistanceToNow(new Date(dateString), { addSuffix: true })
//   } catch (e) {
//     return 'NaN'
//   }
// }
