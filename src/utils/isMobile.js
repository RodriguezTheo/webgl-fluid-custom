export default function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent)
}