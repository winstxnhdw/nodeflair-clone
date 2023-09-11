export const TechStacks = (techStacks: string[]) =>
  techStacks.map((techStack) => (
    <span
      style={{
        color: '#838383',
        display: 'inline-block',
        padding: '5px 8px',
        overflow: 'hidden',
        maxWidth: '90%',
        fontFamily: 'Roboto Mono',
        fontWeight: 'bold',
        borderRadius: '5px',
        textOverflow: 'ellipsis',
        backgroundColor: '#f1f1f1',
        marginRight: '4px',
      }}
      key={techStack}>
      {techStack}
    </span>
  ))
