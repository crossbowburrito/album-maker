import mido
from mido import Message, MidiFile, MidiTrack

# Create a new MIDI file
mid = MidiFile()

# Create a new MIDI track
track = MidiTrack()
mid.tracks.append(track)

# Define the MIDI notes for a C Major chord
c_major_chord = [60, 64, 67]  # C4, E4, G4

# Add 'note_on' messages for each note in the chord
for note in c_major_chord:
    track.append(Message('note_on', note=note, velocity=64, time=0))

# Add a delay (e.g., 480 ticks)
track.append(Message('note_off', note=c_major_chord[0], velocity=64, time=480))

# Add 'note_off' messages for each note in the chord
for note in c_major_chord[1:]:
    track.append(Message('note_off', note=note, velocity=64, time=0))

# Save the MIDI file
mid.save('c_major_chord.mid')
