import { z } from 'zod'

export const RegiterAcivitySchema = z.object({
  name: z.string().min(1, {
    message: 'name is required'
  }),
  type: z.string().min(1, {
    message: 'type is required'
  }),
  sport_type: z.enum(
    [
      'AlpineSki',
      'BackcountrySki',
      'Badminton',
      'Canoeing',
      'Crossfit',
      'EBikeRide',
      'Golf',
      'Hike',
      'IceSkate',
      'InlineSkate',
      'Kayaking',
      'Kitesurf',
      'MountainBikeRide',
      'Ride',
      'RockClimbing',
      'RollerSki',
      'Rowing',
      'Run',
      'Sail',
      'Skateboard',
      'Snowboard',
      'Snowshoe',
      'Soccer',
      'Squash',
      'StairStepper',
      'StandUpPaddling',
      'Surfing',
      'Swim',
      'TableTennis',
      'Tennis',
      'TrailRun',
      'Walk',
      'WeightTraining',
      'Wheelchair',
      'Windsurf',
      'Workout',
      'Yoga'
    ],
    {
      message: 'Sport type is required'
    }
  ),

  start_date_local: z.string().min(1, {
    message: 'start_date_local is required'
  }),
  elapsed_time: z.number().min(1, {
    message: 'elapsed_time is required'
  }),
  description: z.string().min(1, {
    message: 'description is required'
  }),
  distance: z.number().min(1, {
    message: 'distance is required'
  }),
  trainer: z.string().min(1, {
    message: 'trainer is required'
  }),
  commute: z.string().min(1, {
    message: 'commute is required'
  })
})
