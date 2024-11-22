export interface SliderContainerProps {
  caption?: string
  trackMarks?: number[] | undefined
  children: React.ReactNode
  value?: number | [number, number] | null
  unit?: string
  onChange: (value: any) => void
}
export interface ExtendedSliderProps {
  onValueChange: (newValue: number | [number, number]) => void
}
