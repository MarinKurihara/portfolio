type ToastOptions = {
  title: string
  description?: string
}

export function toast({ title, description }: ToastOptions) {
  // This is a simplified version just for the demo
  alert(`${title}\n${description}`)
}
