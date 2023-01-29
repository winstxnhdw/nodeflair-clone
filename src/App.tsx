import './App.css'
import { JobsPanel } from '@/components/job/JobsPanel'

export default function App() {
  return (
    <div
      className="App"
      style={{
        overflowY: 'hidden',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <JobsPanel />
    </div>
  )
}
