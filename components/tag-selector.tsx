"use client"

interface TagSelectorProps {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  color: string
}

export default function TagSelector({ options, selected, onChange, color }: TagSelectorProps) {
  const toggleTag = (tag: string) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag))
    } else {
      onChange([...selected, tag])
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => toggleTag(option)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selected.includes(option)
              ? "shadow-slack-sm"
              : "bg-white border border-gray-200 text-muted-foreground hover:border-gray-300"
          }`}
          style={{
            backgroundColor: selected.includes(option) ? (color === "#2BAC76" ? "#2BAC76" : "#4A154B") : undefined,
            color: selected.includes(option) ? "white" : undefined,
          }}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
