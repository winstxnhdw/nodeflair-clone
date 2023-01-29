type SenioritiesProps = {
  seniorities: string[] | undefined
}

export const Seniorities = ({ seniorities }: SenioritiesProps) => {
  if (seniorities === undefined) return null

  return (
    <div>
      <b>Seniority</b>
      <div>
        {seniorities.map((seniority) => (
          <div
            style={{
              color: '#838383',
              margin: '0 0 5px 0',
              display: 'inline-block',
              padding: '5px 8px',
              fontFamily: 'Roboto Mono',
              fontWeight: 'bold',
              borderRadius: '5px',
              backgroundColor: '#f1f1f1'
            }}
            key={seniority}>
            {seniority}
          </div>
        ))}
      </div>
    </div>
  )
}
