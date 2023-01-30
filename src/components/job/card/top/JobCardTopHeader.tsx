import type { Job } from '@/types'

export const JobCardTopHeader = ({ avatar, company, rating, category, role }: Job) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }}>
    <div
      className="avatarContainer"
      style={{
        width: 'max-content',
        height: 'max-content',
        margin: '0 10px 0 0'
      }}>
      <img
        src={avatar}
        style={{
          float: 'left',
          width: '45px',
          height: '45px',
          borderRadius: '4px'
        }}
      />
    </div>
    <div
      className="specialisationTag"
      style={{
        order: 3,
        marginLeft: 'auto',
        paddingLeft: '10px'
      }}>
      <div
        style={{
          color: '#1fc76a',
          width: 'max-content',
          padding: '5px 8px',
          fontWeight: '600',
          borderRadius: '5px',
          backgroundColor: '#ddf7e9'
        }}>
        {category}
      </div>
    </div>
    <div
      className="informationContainer"
      style={{
        marginTop: 0
      }}>
      <p
        className="companyNameAndRating"
        style={{
          marginBottom: '2px',
          whiteSpace: 'pre-wrap',
          marginTop: '0px'
        }}>
        <span>{company}</span>
        <span
          style={{
            paddingLeft: '10px',
            whiteSpace: 'nowrap'
          }}>
          {rating === 0 ? '' : `${rating} ★`}
        </span>
      </p>
      <h2
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
          whiteSpace: 'initial',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          fontSize: '16px',
          lineHeight: '1.5em',
          margin: '0',
          fontWeight: 'bold'
        }}>
        {role}
      </h2>
    </div>
  </div>
)
