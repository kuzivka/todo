import { Schema} from 'mongoose';

const taskSchema = Schema(
  {
    id: String,
    task: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    createdAt: String,
    expiresAt: String,
    done: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Task', taskSchema);
