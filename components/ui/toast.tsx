type ToastProps = {
  title: string
  description?: string
}

export function toast({ title, description }: ToastProps) {
  // For now, we'll just use alert. In a real app, you'd want to use a proper toast library
  alert(`${title}\n${description}`);
} 