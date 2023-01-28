import './App.css'
import { JobsPanel } from '@/components/JobsPanel'

export default function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
      <JobsPanel />
    </div>
  )
}
