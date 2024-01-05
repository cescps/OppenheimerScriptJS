async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("No hi ha cap conversa oberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

OPPENHEIMER MOVIE SCRIPT

.........

Dr. Oppenheimer.

Dr. Oppenheimer.

As we begin, I believe you have a statement to read into the record.

Yes, your honor.

We’re not judges, Doctor.

No.

Members of the security board, the so-called interrogatory information in your indictment of me cannot be fairly understood except in the context of my life, and my work.

How long did he testify?

Honestly, I forget.

The whole hearing took a month.

An ordeal.

Oh, I’ve only read the transcripts.

Who’d want to justify their whole life?

You weren’t there?

As chairman, I wasn’t allowed to be.

Are they really going to ask about it?

It was years ago.

Four years ago.

Five.

Oppenheimer still divides America.

The committee’s going to want to know where you stood.

Senator Thurmond asked me to say not to feel that you’re on trial.

Oh, funny. I didn’t, until you just said that.

Really, Mr. Strauss…

It’s Admiral.

Admiral. Admiral Strauss, this is a formality.

President Eisenhower has asked you to be in his cabinet.

The Senate really has no choice but to confirm him.

And if they bring up Oppenheimer?

When they bring up Oppenheimer, you answer honestly, no senator can deny you did your duty.

It’ll be uncomfortable.

Who’d want to justify their whole life?

Why did you leave the United States?

I… I wanted to study the new physics.

Was there nowhere here?

I thought Berkeley had the leading theoretical physics department.

Yes, once I built it.

But first I had to go to Europe.

I went to Cambridge, to study under Patrick Blackett.

Were you happier there than in America?

Happier?

Yes.

No.

No, I, uh…

I was homesick and… emotionally immature…

Troubled by visions of a… hidden universe.

Useless in the lab.

Christ, Oppenheimer.

Have you had any sleep?

Start again.

I need to go to a lecture, sir.

Why?

It’s Niels Bohr.

I completely forgot.

Alright! Let’s go.

Oh no, not you, Oppenheimer.

You finish coating those plates.

Quantum physics is not a step forward.

It is a new way to understand reality.

Einstein’s opened the door.

Now we are peering through, seeing a world inside our world, a world of energy and paradox that not everyone can accept.

You alright?

Nils, meet J. Robert Oppenheimer.

What’s the J stand for?

Nothing, apparently.

You were at my lecture. You asked the only good question.

No one’s denying his insight.

It’s his laboratory work that leaves a little to be desired.

I heard you give the same answer…

At Harvard, yes, and you asked the same question.

Why ask again?

I hadn’t liked your answer.

Did you like it better yesterday?

A lot.

You can lift a stone without being ready for the snake that’s revealed.

Now it seems you’re ready.

But you don’t enjoy the lab.

So get out of Cambridge, with its beakers and potions.

Go somewhere they’ll let you think.

Where?

Göttingen.

Born.

Born.

Get to Germany, study under Max Born, learn the ways of theory.

I’ll send word.

Worm hole.

How’s your mathematics?

Not good enough for the physicist he wants to be.

NIELS BOHR: Algebra’s like sheet music, the important thing isn’t can you read music, it’s can you hear it. Can you hear the music, Robert?

J. ROBERT OPPENHEIMER: Yes, I can.

The senator from Wyoming.

Admiral Strauss, I’m interested in your relationship with Dr. J. Robert Oppenheimer.

You met him in 1947.

Correct.

You were a commissioner of the Atomic Energy Commission.

I was, but I actually met Robert in my capacity as board member of the Institute for Advanced Study at Princeton. It was… after the war, he was world-renowned as the great man of physics, and I was determined to get him to run the Institute.

Dr. Oppenheimer. An honor.

Mr. Strauss.

It’s pronounced “Strauss”.

“Oppenheimer”, “Oppenheimer”…

Either way you say it, they know I’m Jewish.

I’m president of Temple Emanu-El in Manhattan.

“Strauss” is just a Southern pronunciation.

Anyway, welcome to the Institute. I think you’ll be very happy here.

Yes, well, you’ll love the commute.

The position comes with that house for you and your wife, and your… is it two children?

Yes, two.

I’m a great admirer of your work.

You’re a physicist by training, Mr. Strauss?

I’m sorry, uh, common room, four o’clock tea.

No, I’m not trained in physics or anything else.

I’m a self-made man.

Ah, I can relate to that.

Really?

Yes, my father was one.

And this would be your office.

I’m told he’s there in most afternoons.

You know, I’ve always wondered why you didn’t involve him in the Manhattan Project.

Greatest scientific mind of our time.

Of his time.

Einstein published his Theory of Relativity more than 40 years ago now.

Could never embrace the quantum world it revealed.

“God doesn’t play dice.”

Precisely.

You never thought of studying physics formally, Mr. Strauss?

I had offers, but… I chose to sell shoes.

Lewis Strauss was once a lowly shoe salesman.

No, just a shoe salesman.

I’d love to introduce you.

No need.

I’ve known him for years.

Albert.

What was that? What did you say to him?

Oh, he’s fine.

Mr. Strauss, there are… things in my past you ought to be aware of.

Well, as chairman of the AEC, I have access to your security file. I’ve read it.

You’re not worried?

No.

Why would I be worried, after everything you’ve done for your country?

Well, times change, Mr. Strauss.

Well, the purpose of this institute is to provide a haven for independent minds.

That’s you.

You are the man for the job.

Well, then I’ll consider it.

I’ll see you at the AEC meeting tomorrow.

This is one of the most prestigious appointments in the country.

Yes, and a great commute.

That’s why I’m considering it.

So Dr. Oppenheimer brought your attention to his past associations before you appointed him?

Yes.

And they didn’t concern you?

Just then I was entirely consumed with what he must have said to Einstein to sour him on me.

But later?

Well, we all know what happened later.

Doctor, your time in Europe, you seem to meet with a wide range of other countries’ physicists.

Yes, that’s right.

Any Russians?

None that spring to mind. If you’ll just allow me to continue with my statement…

Mr. Robb, you’ll have ample opportunity to cross-examine.

After Göttingen, I moved on to Leiden, in Holland, where I first met Isidor Rabi.

Excuse me.

A yank. Lecturing on the new physics.

This I have to hear.

I’m an American myself.

How surprising.

Let me know if you need any help with the English.

Wait, what’s he saying?

No, thank you.

It’s a long way to Zurich.

If you get any skinnier, we’re gonna lose you between the seat cushions.

I’m Rabi.

Oppenheimer.

I caught your lecture on molecules.

Caught some of it.

We’re a couple of New York Jews, how do you know Dutch?

Well, I thought I’d better learn it when I got here this semester.

You learned enough Dutch in six weeks to give a lecture on quantum mechanics?

I like to challenge myself.

Quantum physics wasn’t challenging enough.

Shvitzer.

Shvitzer?

Show-off.

Dutch in six weeks, but you never learned Yiddish.

They don’t speak it so much my side of the park.

Screw you.

You homesick?

Oh, you know it.

Ever get the feeling our kind isn’t entirely welcome here?

Physicists?

That’s funny.

Not in the department.

They’re all Jewish, too.

Eat.

There’s this German you have to seek out.

Heisenberg.

Right.

One might be led to the presumption that behind the quantum world there still hides a real world in which causality holds, but such speculations seem to us, to say it explicitly, fruitless.

Thank you. Have a great day.

Wonderful.

Thank you.

Dr. Oppenheimer.

Oppenheimer, yes!

I liked your paper on molecules.

Probably because you inspired it.

If I inspire anything else, let me know. We could publish together.

I have to get back to America.

Why?

There’s no one there taking quantum mechanics seriously.

That’s exactly why.

He’s pining for the canyons of Manhattan.

Canyons of New Mexico.

You’re from New Mexico?

No, New York.

But my brother and I have a ranch outside Santa Fe.

That’s the America I miss right now.

Then it’s best you get home, cowboys.

That’s him.

No, me and horses?

I don’t think so.

Nice to meet you.

Did you ever encounter Heisenberg again?

Not in person, no, but… you might say our paths crossed.

On returning to America, I accepted positions at both Caltech and up at Berkeley.

Dr. Lawrence, I presume?

You must be Oppenheimer.

Yes.

I hear you want to start a school of quantum theory.

I am starting it, next door.

They put you in there?

I asked for it.

Wanted to be close to you experimentalists.

Theory will get you only so far.

We’re building a machine to accelerate electrons.

Magnificent.

Would you like to help?

Build it? Oh, no. No, no.

But I am working on theories I’d like to test with it.

When do you start teaching?

I’ve got my first in an hour.

Seminar?

Pupil.

One student? That’s it?

I’m teaching something no one here has dreamt of.

But once people start hearing what you can do with it…

There’s no going back.

Oh, I must have missed the…

Mr. Lomanitz?

Yeah.

Yes, this is it.

Please, take a seat.

What do you know about quantum mechanics?

I have a grasp on the basics.

Then you’re doing it wrong.

Is life made up of particles or waves?

Quantum mechanics says it’s both. How can it be both?

It can’t.

It can’t.

But it is.

It’s paradoxical, and yet, it works.

Thank you.

Mr. Lomanitz. You’re gonna be okay.

Mr. Snyder.

Now, let’s consider a star.

A star, a vast furnace burning in outer space, fire pushing outwards against its own gravity, balanced.

But if that furnace cools, and gravity starts winning, it contracts.

Density increases.

Correct.

Increasing gravity.

Increasing density.

And?

It’s a vicious cycle until…

What’s the limit here?

I don’t know. See where the math takes us.

I guarantee it’s somewhere no one’s been before us.

Me?

Yes, you. Your math is better than mine.

Dr. Oppenheimer’s file contained details of his activities at Berkeley.

Why would they have started a file on Dr. Oppenheimer before the war?

Well, you’d have to ask Mr. Hoover.

I’m asking you, Admiral Strauss.

Uh, my assumption is that it was connected to his, uh, left-wing political activities.

You shouldn’t let them bring their politics in the classroom, Oppie.

I wrote that.

Lawrence, you embraced the revolution in physics.

Can’t you see it everywhere else?

Picasso, Stravinsky, Freud, Marx.

Well, this is America, Oppie. We had our revolution.

Seriously, keep it out of the lab.

Well, out of the lab, my landlady is having a discussion group tonight.

Interested?

I have sampled the Berkeley political scene.

It’s all just philosophy post-grads and communists talking integration.

You don’t care about integration?

I want to vote for it, not talk about it.

Especially on a Friday. Come on, let’s eat.

I’m meeting my brother there.

And how would these activities have come to the attention of the FBI?

Well, if I remember correctly, the FBI was taking license plates outside suspected communist gatherings, and his name popped up.

Jesus Christ!

Sorry.

Frank!

Uh, you remember Jackie?

Evening.

Robert! I want you to meet Chevalier.

Dr. Haakon Chevalier, Dr. Robert Oppenheimer.

Pleasure.

Pleasure.

This is my little brother, Frank.

And this is…

Still Jackie.

Hello, Still Jackie.

Chevalier, you’re in languages?

And your reputation precedes you.

What have you heard?

That you’re teaching a radical new approach to physics I have no chance of understanding, but I haven’t heard you’re a party member.

Uh, I’m not.

Oh, not yet.

Frank and I are thinking of joining.

Just the other day I was saying…

I support a range of causes.

Spanish Civil War?

A democratic republic being overthrown by fascist thugs.

Who wouldn’t?

Our government.

They think that socialism is a bigger threat than fascism.

Not for long. Look at what the Nazis are doing to the Jews.

I send funds to colleagues in Germany to emigrate.

I have to do something.

My own work is so… abstract.

What are you working on?

What happens to stars when they die?

Do stars die?

Well, if they do, they’d cool, then collapse.

In fact, the bigger the star, the more violent its demise.

Their gravity gets so concentrated, it swallows everything.

Everything, even light.

Can that really happen?

The math says it can.

If we can get published, then perhaps one day an astronomer finds one.

But right now, all I have is theory, which can’t impact people’s lives.

Well, if you’re going to send money to Spain, do it through the Communist Party.

They can get it to the front lines.

Mary sent me with these.

I’m Jean.

Robert.

Haakon Chevalier. That union meeting at Serber’s last month.

Right, right, yes.

Oh, thank you.

Robert here says he’s not a communist.

Well, then he doesn’t know enough about it.

Oh, I’ve read Das Kapital, all three volumes.

Does that count?

It would make you better-read than most party members.

Turgid stuff. There’s some thinking, um…

“Ownership is theft.”

Property.

Property?

Property, not ownership.

I’m sorry, I read it in the original German.

It’s not about the book. It’s about the ideas.

And you sound uncommitted.

I’m committed to thinking freely about how to improve our world.

Why limit yourself to one dogma?

You’re a physicist. Do you pick and choose rules?

Or do you use the discipline to channel your energies into progress?

I like a little wiggle room.

Do you always toe the party line?

I like my wiggle room, too.

What?

Wait, wait, wait.

Unexpected.

What?

For a physicist.

You only have a shelf full of Freud?

Well, actually, my background’s more…

Jungian?

You know analysis?

When I was in post-grad at Cambridge, I had a little trouble.

I’ll bite.

I tried to poison my tutor.

Did you hate him?

I liked him very much.

You just needed to get laid.

It took my analysts two years, and I don’t think they ever put it that succinctly.

You have everyone convinced you’re more complicated than you actually are.

We’re all simple souls, I guess.

I’m not.

What’s this?

Sanskrit.

You can read this?

I’m learning.

Read this.

Well, in this part, Vishnu reveals his multi-armed self…

No.

Read the words.

J. ROBERT OPPENHEIMER: “And now I am become Death… destroyer of worlds.”

This’ll do.

It’ll break before dawn.

Air cools overnight.

Just before dawn, it breaks.

Well, so, I’m getting married.

Frank! congratulations!

Thank you, thank you.

To Jackie?

Yeah, to Jackie.

The waitress?

Oppie, you’re right. It’s letting up.

I’m gonna go see if there’s any stars.

All your talk about the common man, but Jackie’s not good enough for you, hmm?

We joined the party, and you can’t hide your disappointment.

Why? Is that because that’s supposed to be your thing?

I haven’t joined the party, Frank.

And I don’t think she should have convinced you to either.

Half of the faculty is communist.

Not that half.

I’m your brother, Frank, and I want you to be cautious.

And I want to wring your neck.

I won’t live my life afraid to make a mistake.

You’re happy… I’m happy.

So then I’m happy you’re happy that I’m happy.

I feel like I can see one of those dark stars that you’re working on.

You can’t.

That’s the whole point. Their gravity swallows light.

It’s like a kind of hole in space.

Is Frank okay?

Yes. He just has a shitty brother.

It is special here.

When I was a kid… I thought if I could find a way… to combine physics and New Mexico, my life would be perfect.

Little remote for that.

Yes.

Let’s get some sleep.

That mesa we saw today, one of my favorite places in the world.

Tomorrow we’ll climb it.

What’s it called?

Los Alamos.

I didn’t expect to see you today.

Do I have to make an appointment?

Alvarez?

Oppie! Oppie!

What? What is it?

They’ve done it.

They’ve done it. Hahn and Strassmann in Germany.

They split the uranium nucleus.

How?

Bombard it with neutrons.

It’s a nuclear fission.

They did it. They split the atom.

That’s not possible.

I’m gonna try to reproduce it.

See? Can’t be done.

Very elegant.

Quite clear.

There’s just one problem.

Where?

Next door.

Alvarez did it.

And look.

These fission pulses, they’re massive.

I’ve seen 30 of these in the past ten minutes.

Theory will take you only so far.

During the process… extra neutrons boil off, which could be used to split other uranium atoms.

Chain reaction.

You’re thinking what I’m thinking.

You, me, and every other physicist around the world who’s seen the news.

I just… what, what are we all thinking?

A bomb, Alvarez.

A bomb.

I told you, Robert, no more fucking flowers.

I don’t understand what you want from me.

I don’t want anything from you!

Well, you say that, and then you call.

Well, don’t answer.

I’ll always answer.

Fine.

Just no more flowers.

You’re not coming?

You have to know when you’re beaten, Robert.

It’s not that simple, Haak.

Chevalier, good to see you. Barbara, good to see you.

And the illustrious Dr. Oppenheimer.

I’m Eltenton.

Oh, pleasure.

Please, please.

Why don’t you say a word about organized labor on campuses?

Yes? Coming through, coming through!

I work at Shell.

We’ve signed up chemists, we’ve signed up engineers.

So why not sciences and academia?

Oppie! Oppie! Oppie! Oppie!

Teachers are unionized.

Why not professors?

Don’t you have somewhere to be?

Lawrence, academics have rights too.

Look, it’s not that. I’ve got a group coming.

Oh. I’ll sit in.

Not this one.

Richard, Dr. Bush.

What brings you two up north?

Richard, you tell Ruth I’ll be down in Pasadena Thursday.

Paper on black holes, it’s in!

Where’s Hartland?

Get Hartland. Get Hartland.

September 1st, 1939? The world’s gonna remember this day.

Oh, Hartland, our paper, it’s in print.

You’ve been upstaged.

During the Battle of Britain, I found myself increasingly out of sympathy with the… policy of neutrality that communists advocated.

But after Hitler invaded Russia and we became allies, these communist sympathies, do they return?

No.

I need to make clear that my changing views on Russia did not mean a sharp break from those who held different views.

For a year or two during a previous marriage, my wife Kitty had been a Communist Party member.

This is where I keep the good stuff.

Well, I thought this was the Tolmans’ house.

I live with them while I’m at Caltech.

Do you two need anything?

We’re good, Ruthie.

So, you’re a biologist.

Well, somehow I have graduated to housewife.

Can you explain quantum mechanics to me?

Seems baffling.

Yes, it is.

Well, this glass, this drink… this countertop…

Our bodies.

All of it.

It’s mostly empty space.

Groupings of tiny energy waves bound together.

By what?

Forces of attraction strong enough to convince us that matter is solid.

Stop my body passing through yours.

You’re married to Dr. Harrison.

Not very.

There is someone that I feel…

Does she feel that way?

Sometimes.

Not enough.

You know, I’m going to New Mexico.

To my ranch, with friends.

You should come.

I meant, with your husband.

Yes, you did.

Because you know it won’t make a bit of difference.

Why did you marry him?

I was lost, and… he was kind.

Lost?

Well, my previous husband had died, and… at 28, I wasn’t really ready to be a widow.

Who was your first husband?

Nobody.

My second husband was Joe Dallet.

He was from money, like me, but he was a union organizer in Youngstown, Ohio.

I fell hard.

How hard?

Hard enough to spend the next four years living off beans and pancakes, handing out the Daily Worker at factory gates.

By ’36, I just told Joe I couldn’t take it anymore.

Quit the party.

A year later, I wanted him back.

Him, not the Daily Worker. And… he said: “Swell, I’ll meet you on my way to Spain.”

Went to fight for the Loyalists?

And then he went to the brigades and I waited.

And…

Joe got himself killed first time he popped his head out of the trench.

Ideology got Joe killed, for nothing.

The Spanish Republic isn’t nothing.

My husband offered both our futures to stop one fascist bullet from embedding itself in a mud bank.

That’s the definition of nothing.

Seems a little reductive.

Pragmatic.

Now here I am.

Wherever the hell this is.

I didn’t want you to hear it from anyone else.

At least you didn’t bring me flowers.

We both know I’m not what you want, Jean.

Yeah, but it’s a door closing.

No.

Not as far as I’m concerned, no.

You knocked her up. Fast work.

Can’t keep a good man down.

I meant her.

She knew what she wanted.

What about the husband?

We talked.

They’re getting a divorce, so we can get married before she starts showing.

How civilized.

You idiot.

This is your community.

You think the rules don’t apply to the golden boy?

Brilliance makes up for a lot.

Don’t alienate the only people in the world that understand what you do.

One day you might need them.

F-A-E-C-T!

Federation of Architects, Engineers, Chemists and Technicians.

Lomanitz, what do you get paid a month?

That’s not the point, Lawrence.

What do any of you have in common with farm laborers and dock workers?

Plenty.

Everybody out. Now!

Not you.

What are you doing?

It’s a trade union.

Filled with communists.

So? I haven’t joined the party.

They won’t let me bring you onto the project because of this shit.

They won’t even let me tell you what the project is.

Oh, I know what the project is.

Oh, really?

We’ve all heard about Einstein and Szilard’s letter to Roosevelt warning him the Germans could make a bomb, and I know what it means for the Nazis to have a bomb.

And I don’t?

It’s not your people they’re herding into camps.

It’s mine.

You think that I tell them about your politics?

The next time you’re coming home from a meeting, why don’t you take a look in the rearview mirror, listen to the sounds on your phone line, and stop being so goddamn naive?

Why would they care what I do?

Because you’re not just self-important, you’re actually important.

Okay.

I get it.

If you could just be a little more…

Pragmatic. I’ll talk to Lomanitz, I’ll talk to the others.

You don’t have to worry, it’s done.

Lawrence.

Then welcome to the war.

I filled out my first security questionnaire and was informed that my involvement with left-wing groups would not prove a bar to my working on the atomic program.

Why were his communist associations not seen as a security risk during the war?

Senator, I can’t possibly answer for security clearance granted years before I ever met the man.

Fine. What about after?

After the war, Dr. Oppenheimer was the most respected scientific voice in the world.

That’s why I asked him to run the Institute.

That’s why he advised the Atomic Energy Commission.

Simple as that.

What are they accusing me of?

I think they just want to know what happened between 1947 and 1954 to change your mind on Oppenheimer’s security clearance.

I didn’t.

I was chair of the AEC, but it wasn’t me that brought the charges against Robert.

Who did?

Some former staff member of the Joint Congressional Committee.

He was a rabid anti-communist named Borden.

He wrote to the FBI demanding they take action.

The FBI? Why not go to the AEC direct?

You’d get caught holding the knife yourself.

What did Borden have against Oppenheimer?

This is the McCarthy era.

People hounded out of jobs for any hint of red, and…

Reading Oppenheimer’s security file, his communist brother, sister-in-law, fiancée, best friend, wife.

That’s before we even get to the Chevalier incident.

But how would Borden have access to Oppenheimer’s security file?

Because somebody gave it to him.

Somebody who wanted Robert silenced.

Who?

Who knows?

Robert didn’t take care not to upset the power brokers in Washington.

His opinions on the atom became definitive, and he wasn’t always patient with us mere mortals.

I came in for plenty of harsh treatment.

There was an AEC vote on the export of isotopes to Norway, and they drafted in Robert to make me look like a fool.

But Dr. Oppenheimer, we’ve already heard from Admiral Strauss that these isotopes could be useful to our enemies in the production of atomic weapons.

Congressman, you could use a shovel in making atomic weapons.

In fact, you do.

You could use a bottle of beer in making atomic weapons.

In fact, you do. I’d say isotopes are less useful than electronic components, but more useful than a sandwich.

Genius is no guarantee of wisdom.

How could this man who saw so much be so blind?

Kitty?

Kitty?

Kitty.

The project.

I’m in.

I’m in!

Let’s celebrate.

Shouldn’t you go to him?

I have been going to him all fucking day.

I don’t know how to say this.

I’m ashamed to ask.

Anything.

Take Peter.

Sure.

No, for a while, Haak.

A while.

Does Kitty know you’re here?

Yes, of course she knows.

Of course she knows.

We’re awful people. Selfish, awful people.

Forget I asked.

Selfish, awful people, they don’t know they’re selfish and awful.

Sit, sit, sit.

Robert, you see beyond the world we live in.

There is a price to be paid for that.

Of course we’ll help you.

Everything’s changing, Robert.

Having a child was always going to change…

No, the world is pivoting in some new direction.

Reforming.

This is your moment.

We’re putting together a group to study…

We shouldn’t be doing anything.

You should.

Lawrence won’t get this done.

Or Tolman or Rabi. You will.

Who are the uniforms?

I thought you might know.

Dr. Oppenheimer.

I’m Colonel Groves. This is Lieutenant Colonel Nichols.

Have that dry cleaned.

Well, if that’s how you treat a lieutenant colonel, I’d hate to see how you treat a… humble physicist.

If I ever meet one, I’ll let you know.

Ouch.

Theaters of combat all over the world, but I have to stay in Washington.

Why?

I built the Pentagon.

The brass likes it so much, they made me take over the Manhattan Engineer District.

Which is?

Don’t be a smartass.

You know damn well what it is.

You and half of every physics department across the country.

That’s problem number one.

I thought problem number one would be securing enough uranium ore.

1,200 tons, bought the day I took charge.

Processing?

Just broke ground at Oak Ridge, Tennessee.

Now I’m looking for a project director.

And my name came up?

Nope.

Even though you brought quantum physics to America, which made me curious.

What have you found out?

You’re a dilettante, a womanizer, a suspected communist.

I’m a New Deal Democrat.

I said “suspected”.

Unstable, theatrical, egotistical, neurotic.

Nothing good, no?

Not even “he’s brilliant, but…”

Well, brilliance is taken for granted in your circle, so no.

No, the only person who had anything good to say was Richard Tolman.

Tolman thinks you have integrity, but he also strikes me as a guy who knows more about science than people.

Yet here you are.

You don’t take much on trust.

I don’t take anything on trust.

Why don’t you have a Nobel Prize?

Why aren’t you a general?

They’re making me one for this.

Perhaps I’ll have the same luck.

The Nobel Prize for making a bomb?

Alfred Nobel invented dynamite.

So how would you proceed?

You’re talking about turning theory into a practical weapon system faster than the Nazis.

Who have a 12-month head start.

18.

How could you possibly know that?

Our fast neutron research took six months.

The man they’ve undoubtedly put in charge will have made that leap instantly.

Who do you think they put in charge?

Werner Heisenberg.

He has the most intuitive understanding of atomic structure I have ever seen.

You know his work?

I know him, just like I know Walther Bothe, von Weizsäcker, Diebner.

In a straight race, the Germans win.

We’ve got one hope.

Which is?

Antisemitism.

What?

Hitler called quantum physics “Jewish science”.

Said it right to Einstein’s face.

Our one hope is that Hitler is so blinded by hate that he’s denied Heisenberg proper resources, because it’ll take vast resources.

Our nation’s best scientists working together. Right now, they’re scattered.

Which gives us compartmentalization.

All minds have to see the whole task to contribute efficiently.

Poor security may cost us the race.

Inefficiency will.

The Germans know more than us anyway.

The Russians don’t.

Remind me, who are we at war with?

Somebody with your past doesn’t want to be seen downplaying the importance of security from our communist allies.

Point taken, but… no.

You don’t get to say no to me.

It’s my job to say no to you when you’re wrong.

So you have the job now?

Uh, I’m considering it.

I’m starting to see where you got your reputation.

My favorite response: “Oppenheimer couldn’t run a hamburger stand.”

I couldn’t.

But I can run the Manhattan Project.

There’s a way to balance these things.

Keep the Rad Lab here at Berkeley, under Lawrence.

Met Lab in Chicago, under Szilard.

Large-scale refining, where did you say, Tennessee?

And Hanford.

And Hanford.

All America’s industrial-minded scientific innovation, connected by rail, focused on one goal, one point in space and time.

And it comes together here, a secret laboratory.

In the middle of nowhere, secure, self-sufficient.

Equipment, housing, the works.

Keep everyone there until it’s done.

We’ll need a school, stores, a church.

Why?

If we don’t let scientists bring their families, we’ll never get the best.

You want security, build a town. Build it fast.

Where?

Welcome to Los Alamos.

There’s a boys’ school we’ll have to commandeer, and the local Indians come up here for burial rites, but apart from that, nothing.

40 miles. Any direction.

We’ll have to find the perfect spot.

For?

Success.

Build him a town. Fast.

Let’s go recruit some scientists.

Why would I leave my family?

I told you, you can bring your family.

I’m not a soldier, Oppie.

A soldier?

He’s a general. I’ve got all the soldier I need.

What can I tell them?

Heisenberg, Diebner, Bothe and Bohr. What do these men have in common?

Uh, the greatest minds on atomic theory.

Yes, and?

As much as you like.

Until you feel my boot on your balls.

You know isotopes, and you know explosives better than anyone in the world.

But you can’t tell us what you’re doing.

I don’t know.

The Nazis have them.

Niels Bohr’s in Copenhagen.

Under Nazi occupation. Did they stop printing newspapers in Princeton?

Why would we go to the middle of nowhere for who knows how long?

For a year or two. Or three.

General, could you… give us a moment?

It’s about unleashing a strong force.

Before the Nazis do.

Oh my god.

Niels won’t work for the Nazis.

No, never.

But while they have him, we don’t.

That’s why I need you.

Why would you think I’d do that?

Why? Why?

How about because this is the most important fucking thing to ever happen in the history of the world?

How about that?

Fuck.

They’re not gonna let me onto this project.

And failing a security check is not going to be good for a career even after the war.

So you’re a fellow traveler. So what?

This is a national emergency.

I’ve got some skeletons. They put me in charge.

They need us.

Until they don’t.

Is there any chance of getting Bohr out of Denmark?

Yeah, no dice. I checked with the British.

Until we get Allied boots back onto the continent, there’s just no way.

Is he that important?

How many people do you know who proved Einstein wrong?

You know, it really would be quicker to take a plane.

A plane’s too risky.

The country needs us.

What happened, guys?

They say the building’s too small for this cyclotron.

Get them together with the architects.

When’s this place supposed to open?

Two months.

Robert, you’re the great improviser, but this… you can’t do in your head.

Four divisions.

Experimental, theoretical, metallurgical.

Who’s running theoretical?

I am.

That’s what I was afraid of. You’re spread too thin.

So you take theoretical.

I’m not coming here, Robert.

Why not?

You drop a bomb and it falls on the just and the unjust.

I don’t wish the culmination of three centuries of physics to be a weapon of mass destruction.

Izzy…

J. ROBERT OPPENHEIMER: I don’t know if we can be trusted with such a weapon. But I know the Nazis can’t.

We have no choice.

Then…

The second thing you have to do is appoint Hans Bethe to run the theoretical division.

Wait, what was the first?

Take off that ridiculous uniform.

You’re a scientist.

Groves is insisting we join.

Tell Groves to go shit in his hat.

They need us for who we are.

So be yourself.

Only better.

This is the only key.

And Teller’s already here.

Shall I just show him in?

No, let’s wait for the others.

Let’s get started.

Hello, Edward.

Yes.

Gentlemen, so, we will work here

until the T Section at Los Alamos is finished.

Edward, can I…?

This is more important.

When I calculated the chain reaction, I found a rather troubling possibility.

No, this can’t be right.

Show me how you did your calculations.

Yes.

Exponential.

No, no, no. No.

This is fantasy.

Teller’s calculations can’t be right.

Do them yourself while I go to Princeton.

What for?

To talk to Einstein.

Well, there’s not much common ground between the two.

That’s why I should get his view.

Albert.

Hmm?

Ah, Dr. Oppenheimer.

Have you met Dr. Gödel?

We walk here most days.

Trees have the most inspiring structures.

Albert, might I have a word?

Of course. Excuse me, Kurt.

Some days Kurt refuses to eat.

Even in Princeton, he’s convinced that the Nazis can poison his food.

Whose, whose work is this?

Teller’s.

What do you take it to mean?

Neutrons smash into the nucleus, releasing neutrons to smash into other nuclei.

Criticality.

Point of no return. Massive explosive force.

But this time, the chain reaction doesn’t stop.

It would ignite the atmosphere.

When we detonate an atomic device, we might start a chain reaction that… destroys the world.

So here we are, hmm?

Lost in your quantum world of probabilities, and needing certainty.

Can you run the calculations yourself?

About the only thing you and I have in common is a disdain for mathematics.

Who’s working on this in Berkeley?

Hans Bethe.

Well, he’ll get to the truth.

And if the truth is catastrophic?

Then you stop, and you share your findings with the Nazis.

So neither side destroys the world.

Robert.

This is yours, not mine.

Teller’s wrong.

He’s wrong.

When you know Teller’s critical assumptions, the real picture emerges.

Bottom line?

The chances of an out-of-control nuclear reaction are near-zero.

Near-zero.

Oppie, this is good news.

Mm-hmm.

Can you run them again?

Oh, you’ll get the same answer.

Until they actually detonate one of these things, the best assurance you’re going to get is this.

Near-zero.

Theory will take you only so far.

Hello!

Hi.

We missed him.

You want to adopt?

She’s kidding.

We wanted to see you before we left.

For parts unknown.

You know who I ran into the other day?

Eltenton.

That chemist from Shell? The union guy?

Yeah, the FAECT guy.

He was moaning about how we’re handling the war.

How so?

Lack of cooperation with our allies.

Apparently, our government’s not sharing any research with the Russians.

He said most scientists think the policy is stupid.

Oh, yeah?

Yeah.

He mentioned that if anyone had anything they wanted to pass on, going around official channels, that he could help.

That would be treason.

Yes, of course.

I just thought you should know.

The brat is down.

Where are the martinis?

Coming right up.

The conversation ended there.

Nothing in our long-standing friendship would have led me to believe that Chevalier was actually seeking information, and I am certain that he had no idea of the work in which I was engaged.

It has long been clear to me that I should have reported this incident at once.

The Oppenheimer situation highlights the tension between scientists and the security apparatus.

In hopes of learning how the nominee handled such issues during his time at the AEC, we’ll have a scientist appearing before the committee.

Who are they bringing in?

They hadn’t said.

Mr. Chairman, if I may, I’m nominated for Commerce Secretary.

Why seek the opinion of scientists?

This is a cabinet post, Admiral.

We seek a wide range of opinion.

I’d like to know the name of the scientist testifying.

I’d like the chance to cross-examine.

This is not a court.

Formality, huh?

No presidential cabinet nominee has failed to be confirmed since 1925.

This is just how the game is played.

It’s in the bag, Lewis. So play nice.

They bring in a scientist, so what?

You don’t know scientists like I do, Counselor.

They resent anyone who questions their judgment, especially if you’re not one of them.

I was chair of the AEC.

I’m easy to blame for what happened to Robert.

We can’t have the Senate thinking the scientific community doesn’t support you, sir.

Or should we pivot?

To what?

And embrace it.

“I fought Oppenheimer, and the US won.”

I don’t think we need to go there.

Isn’t there someone we can call who knows what really happened?

Teller.

He’ll make an impression.

Can you get the name of the scientist they’ve called?

Probably.

Find out if he was based in Chicago or Los Alamos during the war.

Why does that matter?

Well, if he was based in Chicago, they worked under Szilard and Fermi, not the cult to Bobby in Los Alamos.

Robert built that damn place. He was founder, mayor, sheriff.

All rolled into one.

Now all it needs is a saloon.

There’s no kitchen.

Really? We’ll fix that.

Barbed wire? Guns?

Oppie…

We’re at war, Hans.

Halifax.

1917.

A cargo ship carrying munitions explodes in the harbor.

A vast and sudden chemical reaction.

The biggest man-made explosion in history.

Now, let’s calculate how much more destructive it would have been if it were a nuclear and not a chemical reaction, expressing power in terms of tons of TNT.

But it will be thousands.

Well, then, kilotons.

Using U-235, the bomb will need a…

Uh…

Sorry. Gadget will need a 33-pound sphere about this size, or using plutonium, a ten-pound sphere.

Here’s the amount of uranium Oak Ridge refined all of last month.

And the Hanford plant made this much plutonium.

Now, if we can enrich these amounts, we need a way to detonate them.

Are we boring you, Edward?

A little bit, yes.

May I ask why?

We all entered this room knowing a fission bomb was possible.

How about we leave it with something new?

Such as?

Instead of uranium or plutonium, we use hydrogen.

Heavy hydrogen. Deuterium.

You see, we compact the atoms together under great pressure to induce a fusion reaction.

Then we’ll get not kilotons, but megatons.

Okay, hang on, hang on.

So how do you generate enough force to fuse hydrogen atoms?

A small fission bomb.

There we are!

Well, since we’re going to need one anyway, can we get back to the business at hand?

The isotopes issue wasn’t your most important policy disagreement with Dr. Oppenheimer.

It was the hydrogen bomb, wasn’t it?

As colleagues, we agreed to disagree on a great many things, uh…

And one of them was the need for an H-bomb program, yes.

Thanks for convening on short notice.

I can’t believe it.

But here we are. Catch me up. What do we know?

One of our B-29s over the North Pacific has detected radiation.

Do we have the filter papers?

There’s no doubt what this is.

White House says there’s a doubt.

Wishful thinking, I’m afraid.

Are those the long-range detection filter papers?

It’s an atomic test.

The Russians have a bomb.

We’re supposed to be years ahead of them, but this…

What were you guys doing in Los Alamos? Wasn’t security tight?

Of course it was. You weren’t there.

Forgive me, Doctor.

But I was there.

We can now consider the actual mechanics of detonation.

Any ideas?

I call this shooting.

We fire a chunk of fissionable material into a larger sphere with enough force to achieve criticality.

What do we think? Anyone?

I’ve been thinking about implosion.

Explosives around the sphere blast inwards, crushing the material.

I’d like to investigate that idea.

I’ll talk to ordnance.

Get you blowing things up.

Progress?

Nice to see you too.

Meet the British contingent.

Dr. Oppenheimer. Klaus Fuchs.

J. ROBERT OPPENHEIMER: How long have you been British?

KLAUS FUCHS: Since Hitler told me I wasn’t German.

Ah. Come, welcome to Los Alamos.

The school’s up and running.

The bar.

Always running.

And I thought of a way to reduce support staff.

Is that…?

Mrs. Serber, yes.

I’ve offered jobs to all the wives, admin, librarians, computation.

We cut down on staff, keep families together.

Are these women qualified?

Don’t be absurd.

These are some of the brightest minds in our community.

And they’re already security cleared.

I’ve informed General Groves you’ve been holding cross-divisional open discussions on a nightly basis.

Shut them down.

Compartmentalization is the key to maintaining security…

Only the top men.

Who presumably communicate with subordinates.

These men aren’t stupid. They can be discreet.

I don’t like it.

You don’t like anything enough for that to be a fair test.

Once a week. Top men only.

I’d like to bring my brother here.

No.

Nichols?

I still haven’t heard that my security clearance has been approved.

It hasn’t.

I’m going to Chicago tomorrow.

Well, you should wait.

You are aware that the Nazis have a two-year head start?

Dr. Oppenheimer, the fact that your security clearance is proving difficult to obtain is not my fault.

It’s yours.

It may not be your fault, but it’s your problem. Because I’m going.

And how many people were in these, uh… open discussions?

Too many. Compartmentalization was supposed to be the protocol.

We were in a race against the Nazis.

And now the race is against the Soviets.

Not unless we start it.

Robert, they just fired the starting gun.

What’s the nature of the device they detonated?

Data indicates it may have been a plutonium implosion device.

Like the one you built at Los Alamos.

The Russians have a bomb.

Truman needs to know what’s next.

What’s next? Arms talks.

Arms talks?

Obviously.

What about the Super? Does Truman even know about it?

Did we brief him on that?

Not specifically.

We still don’t know if a hydrogen bomb is technically feasible.

Right, my understanding is that Teller proposed it.

Yes.

At Los Alamos?

Teller’s designs have always been wildly impractical.

You’d have to deliver by oxcart, not airplane.

Oppie!

I’m sorry, Dr. Lawrence, do you want to comment?

No.

Because if it can put us ahead again, the President of the United States needs to know about it.

And if the Russians know about it already from a spy, at Los Alamos, then we’ve got to get going.

There’s no proof there was a spy at Los Alamos.

Robert.

They put it under the football stadium?

The field’s not in use anymore.

Just as well.

Oppie!

Dr. Fermi.

I hear you’ve got a little town.

Yes, come and see.

Who could think straight in a place like that, huh?

Everybody will go crazy.

Thank you the vote of confidence, Szilard.

Do we really… do we really need that in the notes?

Are you gonna try it out?

We did.

The first self-sustaining nuclear chain reaction.

Didn’t Groves tell you?

No.

Dr. Oppenheimer?

I tried personnel.

They asked if I could type.

Can you?

Harvard forgot to teach that on the graduate chemistry course.

Condon, put Mrs. Hornig here on the plutonium team.

What the hell were you doing in Chicago?

Visiting the met.

Why?

You can’t…

Why?

Because we, we have every right…

You have just the rights that I give you. No more, no less.

We are adults trying to run a project here. This is ridiculous.

Tell him!

Compartmentalization is the protocol we agreed to.

Enough of this madhouse. Nobody can work under these conditions.

You know what? Generalissimo, I quit!

Thanks for nothing.

Better off without him.

Aren’t you more concerned about his discretion out there?

We’ll have him killed.

I’m just kidding.

No, he hates me, not America.

You know, General, not everyone has levers to pull like mine.

I don’t think I understand.

You didn’t hire me despite my left-wing past. You hired me because of it.

So you could control me.

No, I’m not that subtle. I’m just a humble soldier.

You’re neither humble, nor just a soldier. You studied engineering at MIT.

Guilty as charged.

Well, now we understand each other, perhaps you can get me my security clearance, so I can perform this miracle for you.

General Groves, were you aware of Dr. Oppenheimer’s left-wing associations when you appointed him?

I was aware that there were suspicions about him.

I was aware he had a very extreme liberal background.

In your opinion, would he ever consciously commit a disloyal act?

I would be amazed if he did.

So you had complete confidence in his integrity?

At Los Alamos, yes. Which is where I really knew him.

Do you know that your security officers on the project advised you against the clearance of Dr. Oppenheimer?

They could not, and would not, clear him until I insisted.

And it’s safe to say that you had pretty good knowledge of Dr. Oppenheimer’s security file.

I did.

Well, then there’s only really one question I need answered here today.

In light of the current AEC guidelines, would you clear Dr. Oppenheimer today?

Do you have the guidelines?

Under current AEC guidelines, would you clear Dr. Oppenheimer today?

Physics and New Mexico, huh?

My god. What a trek.

That’s why you need a liaison.

I’m appointing Lomanitz.

You’re gonna be okay. This way, gentlemen.

Dr. Lawrence.

Leslie.

I’d like to remind you what we talked about at Berkeley.

Compartmentalization, I understand completely.

Greetings from Berkeley.

I am here to update you on our progress and solicit your input.

To do so, I am going to have to share a few things that General Groves told me not to.

Sorry General, I said I understood, not that I agreed.

Okay. Gentlemen, to business!

There were rumors of espionage at Los Alamos.

Unsubstantiated.

I’m told that there were communists on the project.

We didn’t knowingly employ…

I just want to know, were any of them involved in discussions of the Super?

I seem to remember you demanding your brother come to Los Alamos.

My brother had left the party by then.

What about Lomanitz?

Lomanitz was never employed at Los Alamos. He was a liaison.

Our security was tight, as former Colonel Nichols well knows.

Our security was as tight as it could be given the personalities involved, but attempts were made.

What is that supposed to mean?

We’ve all read his file here.

Do we need to talk about Jean Tatlock?

Or the Chevalier incident?

Excuse me.

Lomanitz, line one!

Hello, Rossi. What?

Okay, just calm down.

There’s been another screwup.

Lomanitz just got drafted.

We are at war, Doctor.

Don’t be an asshole, Nichols. We need this kid. Fix it, will you?

It wasn’t a mistake.

Your friend Lomanitz has been trying to unionize the radiation lab.

He promised to quit all that.

Well, he hasn’t.

The security officer at Berkeley is concerned about communist infiltration through that union, the FA…

FAECT.

While I’m there next week, I’ll… drop in to see him.

Your Q clearance came through.

It’s important you not maintain or renew any questionable associations.

Doctor, did you think social contacts between a person engaged on secret war work and communists was dangerous?

My awareness of the danger would be greater today.

I mean, it’s fair to say that during the war years, you felt that such contacts were potentially dangerous.

Were conceivably dangerous, yes.

I mean, really!

Known communists.

Look… I’ve had a lot of secrets in my head for a long time.

Doesn’t matter who I associate with, I don’t talk about those secrets.

You said in your statement that you had to see Jean Tatlock in 1943.

You left.

Not a word.

What did you think that would do to me?

I wrote.

Pages of nothing.

Where did you go?

I can’t tell you.

Why not?

Because you’re a communist.

Why did you have to see her?

She had indicated a great desire to see me before we left.

At that time I couldn’t, but I felt that she had to see me.

She was undergoing psychiatric treatment. She was extremely unhappy.

Did you find out why she had to see you?

Because she was still in love with me.

You spent the night together, didn’t you?

Yes.

You drop in and out of my life, and you don’t have to tell me why.

And that’s power.

Not that I enjoy.

I’d rather be here for you as you need.

But you have other priorities now.

I have a wife and child.

That’s not what either of us is talking about.

Jean… you asked me to come.

And I’m glad I did.

But I can’t see you again.

But what if I need you?

You said you would always answer.

Not a word?

Did you think that consistent with good security?

As a matter of fact, it was.

Not a word.

When did you see her after that?

I never saw her again.

I can make the last train back to Princeton.

Kitty, I didn’t say anything that I hadn’t already told you.

Today you said it to history, didn’t you?

This is a closed hearing.

If they don’t release the transcript, I’m sure you will.

I was under oath.

Well, you were under an oath to me when you went to see Jean.

You know, you…

You sit there, day after day, letting them pick our lives to pieces.

Why won’t you fight?

Robert, I’m not putting her up there.

Dr. Oppenheimer! This is an honor. Please, take a seat.

No need. I just wanted to check whether I should… talk to Lomanitz while I’m here, given your concerns.

I’d say that’s really up to you, Professor, but I’d be cautious.

Understood.

Oh, and, um, as regards to the union, I wanted to give you a heads up on a man named Eltenton.

A heads up?

Yes, just that he might bear watching, is all.

I’d love to get more details.

I have an appointment now, and I leave early tomorrow.

Well, come back as early as you like.

Since you haven’t time now.

You went back the next morning.

I did. I had to, really.

This time there was another man.

He said his name was Pash.

Pash. You met Colonel Pash?

Colonel Pash, could you please read from your memo dated June 29, 1943?

“Results of surveillance conducted on subject indicate further possible Communist Party connections.”

“Subject met with and spent considerable time with one Jean Tatlock, a communist, the record of whom is attached.”

The subject being Dr. Oppenheimer?

Yes.

Whom you had not met?

Not then, but soon after.

He’s the head of security for the project. Shouldn’t I know him?

No, he should know you.

I would never put you in a room with Pash.

Why not?

When Pash first heard about Lomanitz, he told the FBI he was going to kidnap him, take him out on a boat, and interrogate him in the Russian manner.

General Groves has placed in me a certain responsibility, and it’s like having a child who I can’t see, by remote control.

So to actually meet you is…

I won’t take up too much of your time.

Oh, no.

Not at all. Whatever time you choose.

Mr. Johnson told me of the conversation you had yesterday, which I’m very interested in. It’s had me worried all day.

Yes, well, I didn’t want to talk to Lomanitz without authorization.

That’s not the particular interest that I have.

It’s something a little bit more…

In my opinion, more serious.

And then when the FBI pointed out that such information wouldn’t be admissible in court,

Pash made it clear he had no intention of leaving any witness left to prosecute.

Now, the FBI talked him down, but that’s the man you’re dancing with.

I gather you’ve heard there are other parties interested in the work of the radiation lab?

A man attached to the Soviet consul indicated, through intermediate people, to people on this project, that he was in a position to transmit information.

Well, why would anyone on the project want to do that?

Frankly, I can see that there might be an argument for the Commander-in-Chief informing the Russians, they’re our allies, after all, but…

I don’t like the idea of it going out the back door.

It might not hurt to be on the lookout for it.

And you said that to Pash.

I was trying to put it in the context of “Russia’s not Germany”.

Boris Pash is the son of a Russian Orthodox bishop.

Born here, but in 1918 he went back to Russia to fight the Bolsheviks.

This is a man who has killed communists with his own hands.

I’m not the judge of who should or should not have information.

It’s my business to stop it from going through illegally.

Could you be a little more specific?

There’s a man whose name was mentioned to me, a couple of times, Eltenton.

I believe he’s a chemist who works at Shell.

He talked to a friend of his, who’s an acquaintance of someone on the project.

And you thought Pash would be satisfied with that?

I was attempting to give them Eltenton without opening a can of worms.

I told them a cock-and-bull story.

Did you lie to General Groves, too?

No.

I admitted to him that I’d lied to Pash.

Do you recall this conversation about the Chevalier incident?

I’ve seen so many versions of it, uh…

Wasn’t confused before, but I’m certainly getting there now.

And what was your conclusion?

That he was under the influence of the typical American schoolboy attitude that there’s something wicked about telling on a friend.

Well now, might we know through whom the contact was made?

That would involve people who are not to be involved in this.

Is that someone a member of the project?

A member of the faculty, yes, but not in the project, no.

Ah…

So Eltenton made his approach through a member of the faculty here at Berkeley.

As far as I know, as far as I know, yes.

But there… may have been… more than one person involved.

Gentlemen, if I… if I seem uncooperative, I think you can understand it’s because of my insistence on not getting innocent people into trouble.

You’re trying to protect your friend. Who’s protecting you?

Well, you could.

If you gave me the name…

If you order me to, I’ll do it.

That’s a mistake, Robert. You need to volunteer this name.

Did he give you the name?

He did.

But not then, did he?

No.

No, in fact, it was some months later, wasn’t it?

It was.

You see me as persistent.

Well, you are… you are persistent, but that is your job.

And, and my job is to protect the people that work for me.

Instead of us going on certain steps, which may come to your attention… and be disturbing to you, I would like to discuss those with you first.

I’m not formulating a plan, I’ll just have to digest the whole thing.

In the months in between your interview with Dr. Oppenheimer, and his eventual naming of Chevalier, did you expend resources trying to find the name of the intermediary?

Considerable resources, yes.

Without the name, our job was extremely difficult.

And when did you receive the name?

I was gone by the time Oppenheimer finally offered it up.

Gone?

They felt my time would be better spent in Europe, determining the status of the Nazi bomb project.

Who did?

General Groves.

He transferred me to London.

It’s a little early for a Christmas party.

Something’s up.

Tolman’s been away.

Where?

Ruth won’t tell.

Come on, Ruthie.

If you can’t tell me, who can you tell?

Compartmentalization, Oppie.

What makes you think I know where he is, anyway?

Because you do a pretty good job of knowing where Mr. Tolman is when it counts.

Like now?

Attention!

Early Christmas present for you all.

The British pilot put me in the bomb bay.

He showed me the oxygen, you know, but I messed it up.

Um, when they opened me up in Scotland, I was unconscious.

But I pretended I’d been napping.

Please enjoy your party.

NIELS BOHR: Is it big enough?

J. ROBERT OPPENHEIMER: To end the war?

NIELS BOHR: To end all war.

Uh, Heisenberg sought me out in Copenhagen.

It was chilling, my old student working for the Nazis.

He told me some things to draw me out.

Sustained fission reactions in uranium.

That sounds more like a reactor than a bomb.

Did he mention gaseous diffusion?

He seemed more focused on heavy water.

As a moderator?

Yes, instead of graphite.

What?

He took a wrong turn.

We’re ahead.

And with you here to help us, Niels…

Sorry, could you give us a moment, gentlemen?

I am not here to help, Robert.

I knew you could do this without me.

Then why did you come?

To talk about after.

The power you’re about to reveal will forever outlive the Nazis.

And the world is not prepared.

“You can lift the stone without being ready for the snake that’s revealed.”

We have to make the politicians understand this isn’t a new weapon.

It’s a new world.

I’ll be out there doing what I can, but you…

You’re an American Prometheus.

The man who gave them the power to destroy themselves.

And they’ll respect that.

Your work really begins.

I’m sorry, Oppie, but there’s a call.

From San Francisco.

Robert!

Robert?

Robert.

Robert.

God, what’s the matter?

What happened?

Her father called.

He found her yesterday in the bath.

Who?

She’s taken pills. Left a note, not signed.

She took barbiturates, but there was chloral hydrate in her blood.

There was a note.

Jean Tatlock?

We were together.

She said she needed me. I…

I told her I…

I wouldn’t…

I told her I…

No, it was me, it was me.

You don’t get to commit the sin and then have us all feel sorry for you that it had consequences.


Now you pull yourself together.

You know, people here depend on you.

Donald, would you like to contribute here?

Please, help me out.

You’re on your own, pal.

Bob, I’m not quitting my job because plutonium is radioactive.

We just don’t know what it might do

to the female reproductive system.

Your reproductive system is more exposed than mine, presumably.

Can we please?

The implosion device is nowhere.

We can’t rush everything. Oppie, please.

Well, there’s rushing and there’s getting on with it, so pick one.

Wait, wait, wait. Neddermeyer is doing his job.

Teller’s not helping. You’re not helping.

I’ve been asking for calculations on the implosion lenses for weeks.

The British can do it. Fuchs.

Absolutely.

It’s your job, Teller.

I’m engaged in research.

On a hydrogen bomb we’re not even building!

I won’t work with that man.

Oh. Let him go.

He’s a prima donna!

I agree.

He should leave Los Alamos.

Okay.

Kisti, you replace Neddermeyer. Seth, I’m putting you on plutonium.

Lilli, you go on for Kisti, because he needs you.

Fuchs, you take Teller’s role.

I’m putting you exclusively on the implosion device.

And no one is leaving Los Alamos.

They won’t let me leave!

No, I won’t let you leave.

Forget Hans, forget fission.

Stay here, research what you want.

Fusion, the hydrogen bomb, whatever.

We’ll meet to discuss it.

You don’t have time to meet.

You’re a politician now, Robert. You’ve left physics behind many, many years ago.

Once a week.

One hour, you and me.

Now raise this fucking barrier!

So the Super was under development on your watch at Los Alamos?

Yes.

And yet, after the war, you tried to deny it was viable.

No, no, no. I pointed out technical difficulties with it.

Didn’t you try to kill it at the AEC meeting after the Russian bomb test?

No.

But that was the recommendation of the AEC, was it not?

After hours of discussion about the best response.

An H-bomb is 1,000 times the power of an A-bomb.

Its only intended target would be the largest cities.

It’s a weapon of mass genocide.

Izzy.

Draw some circles on this side of the map, where they would target us, starting with New York.

That’s fair.

D.C.

It’s a weapon of attack with no defensive value.

Deterrence.

Deterrence?

Do we really need more deterrence than our current arsenal of atomic bombs?

You, you drown in ten feet of water or 10,000, what’s the difference?

We can already drown Russia. They know it…

Now they can drown us with…

We’re just escalating…

As I said, Teller’s designs are still as impractical as they were during the war.

A hydrogen bomb can be made to work, Oppie. You know that.

I don’t believe we should commit all our resources to that chance.

Then how would you have Truman reassure the American people?

Simply by limiting the spread of atomic weapons through international control on nuclear energy.

By which you mean world government.

The United Nations, as Roosevelt intended.

Well, I asked what Truman should do, right? The world’s changed.

It’s not fascism but communism that now threatens our survival.

Lewis, do you understand, if we build a hydrogen bomb, the Russians will have no choice but to build their own?

Could they be working on one already?

Based on information gathered from the spy at Los Alamos…

No spy at Los Alamos.

Gentlemen…

There wasn’t?

Let’s not get sidetracked.

I say we use this moment to gain concessions from the Russians by committing that we will not build a hydrogen bomb.

Thereby revealing its existence.

Which you seem convinced they already know.

Alright.

At this point, I’d like the committee members to meet in privacy to finalize our recommendations.

I’m just not sure you want to go down this route.

Lewis, with respect, we are the advisory committee.

We will give them our advice.

Good night.

Dr. Oppenheimer? Hi.

William Borden. Joint Committee on Atomic Energy.

Oh, yes, yes.

During the war, I was a pilot.

One night, flying back from a raid, I saw an amazing sight.

Like a meteor. A V2 rocket headed to England.

I can’t help but imagine what it will be for such an enemy rocket to carry an atomic warhead.

Let’s make sure we’re not the ones to make that possible.

Oppie, I don’t think you want to go up against Strauss.

If we both speak, they listen to me.

When you speak, they hear a prophet. When Strauss speaks, they hear themselves.

They’ll listen to a prophet.

A prophet can’t be wrong. Not once.

Did you accuse Oppenheimer of sabotaging the development of the Super?

I was never one of those to bandy around terms like sabotage.

But Mr. Borden was?

As I understand it, possibly.

How was Mr. Borden able to put together such a detailed indictment?

He was no longer a government employee, yet he appears to have had unlimited access to Dr. Oppenheimer’s file.

Might Mr. Nichols have given him access to the file?

Or someone else at the AEC?

That’s a very serious accusation, Senator.

Is it your intention to suggest that Dr. Oppenheimer is disloyal to the United States?

I’ve always assumed, and still assume, that he’s loyal to the United States.

I believe this, and I shall believe it, until I see very conclusive proof to the opposite.

Do you or do you not believe that Dr. Oppenheimer is a security risk?

If I may, look, when Hitler blew his brains out in that bunker, it is my humble opinion that there is no need for that bomb to be seen anywhere except that test site.

Well, we at least have to take a moment to think about whether the means justify the ends any longer because…

Germany is about to surrender.

It’s no longer the enemy who are the greatest threat to mankind.

It’s our work.

Hitler’s dead. It’s true.

But the Japanese fight on.

Their defeat seems assured.

Not if you’re a G.I. preparing to invade.

We can end this war.

But how do we justify using this weapon on human beings?

We’re theorists.

Yes?

We imagine a future, and our imaginings horrify us.

J. ROBERT OPPENHEIMER: They won’t fear it until they understand it, and they won’t understand it until they’ve used it.

When the world learns the terrible secret of Los Alamos, our work here will ensure a peace mankind has never seen.

A peace based on the kind of international cooperation that Roosevelt always envisaged.

Progress?

Two years and a billion dollars’ worth.

Hard to put a price on it.

Not really, just add up the bills.

Rural free deliveries. 80 babies delivered the first year.

This year we’ve had ten, a month.

Birth control is a little out of my jurisdiction, General.

Clearly.

General.

Head down, everybody. Fuchs, head down.

That’s the one!

Two viable bombs.

I need a date.

September.

July.

That’s the sweet spot, gentlemen.

August.

July.

Tests in July.

But I need my brother.

Frank knows the desert. He’s left politics behind.

He’s been working with Lawrence for two years now.

What do we call the test?

“Batter my heart, three-person’d God.”

What?

Trinity.

You insisted on bringing on your brother Frank, a known communist.

Former communist.

You brought a known former communist… onto America’s most secret and important defense project.

I knew my brother could be trusted. Absolutely.

And you thought your judgment was sound on who on the team could be trusted?

Fuchs, head down.

Okay. Everybody ready?

I hope you learned something.

Yeah, we’ve learned we’re gonna need to be a lot further away.

Well, figure it out, fast.

We leave for Washington in the morning. We’re going to give him a date.

You’re a long way from Chicago, Leo.

If we don’t act now, they’re going to use this thing against Japan.

We booked a meeting with Truman, but somebody killed it.

You’re meeting the Secretary of War.

Just because we’re building it, doesn’t mean we get to decide how it’s used.

History will judge us, Robert.

In Chicago, we put together a petition.

I’m not… I’m not getting into this.

Just tell me your concerns, and I’ll relate them.

My concerns? Germany’s defeated.

Japan’s not going to hold out alone.

How could you know that? You got us into this.

You and Einstein, with your letter to Roosevelt saying we could build a bomb.

Against Germany.

That’s not how weapons manufacture works, Szilard.

Oppie, you have to help.

Fermi’s in the meeting. Lawrence is in the meeting.

They’re not you. You’re the great salesman of science.

You can convince anyone of anything.

Even yourself.

Excuse me.

The firestorm in Tokyo killed 100,000 people, mostly civilians.

I worry about America when we do these things and no one protests.

Pearl Harbor, and three years of brutal conflict in the Pacific, buys a lot of latitude with the American public.

Enough to unleash the atomic bomb?

Uh, the A-bomb might not cause as much damage as the Tokyo bombings.

What are we estimating?

In a medium-sized city, uh… 20,000 or 30,000 dead.

Yes, but don’t underestimate the psychological impact of an atomic explosion.

A pillar of fire, 10,000 feet tall, deadly neutron effects for a mile, in all directions, from one single device.

Dropped from a barely-noticed B-29, the atomic bomb will be… a terrible revelation of divine power.

If that’s true, it would be definitive.

World War II would be over.

Our boys would come home.

Military targets?

But there aren’t any big enough.

Perhaps a vital war plant, with workers housed nearby.

And we could issue a warning to reduce civilian casualties.

They’d send everything they have up against us, and I’d be up in that plane.

If we announce it, and it fails to go off, we’d scupper any chance of a Japanese surrender.

Is there no way to demonstrate a bomb to Japan to provoke surrender?

We intend to demonstrate it in the most unambiguous terms.

Twice.

Once to show the weapon’s power, and a second to show that we can keep doing this until they surrender.

We have a list of 12 cities to choose from.

Sorry, 11.

I’ve taken Kyoto off the list, due to its cultural significance to the Japanese people.

Also, my wife and I honeymooned there.

It’s a magnificent city.

Let me make this simple for you, gentlemen.

According to my intelligence, which I cannot share with you, the Japanese people will not surrender, under any circumstances, short of a successful and total invasion of the home islands.

Many lives would be lost, American and Japanese.

The use of the atomic bomb on Japanese cities will save lives.

If we retain moral advantage.

How so?

Well, if we use this weapon without informing our allies, they’ll see it as a threat, and we’ll be in an arms race.

How open can we be with the Soviets?

Secrecy won’t stop the Soviets from becoming part of the atomic world.

We’ve been told they have no uranium.

You’ve been misinformed.

A Russian bomb is a matter of time.

The program needs to continue at full pace after the war.

Secretary Simpson, if I may, not all scientists on the project are in agreement.

In fact, this might be a moment to consider other opinions.

If you talk to scientists…

The Manhattan Project has been plagued from the start by certain scientists of… doubtful discretion, and uncertain loyalty.

One of ’em just tried to meet with the President.

Now, we need these men, but as soon as it’s practical, we should sever any such scientists from the program.

Wouldn’t you agree, Doctor?

If a Russian bomb is inevitable, perhaps we should invite their top scientist to Trinity.

President Truman has no intention of raising expectations that Stalin be included in the atomic project.

Informing him of our breakthrough, and presenting it as a means to win the war, need not make unkeepable promises.

But, the Potsdam Peace Conference in July will be President Truman’s last chance to have that conversation.

Can you give us a working bomb by then?

Absolutely.

We will test fire before the conference.

Ground zero. Observation posts at 10,000 yards, north, south, and west.

Where do we trigger from?

South, 10,000.

And base camp is ten miles south here.

And there’s a further observation post on that hill, 20 miles away.

What’s that, Frank? Trigger lines already went in.

The Air Force requested a line of lights for their B-29.

What B-29? Our bomb’s on the tower.

They want to use the test to confirm a safe operating distance.

That’s risky.

But not as risky as dropping one over Japan, and hoping that we were right about the blast radius.

Don’t let ’em slow us down, we’re firing on the 15th.

The 15th? That’s not…

The 15th.

15th.

So I’ll be here at South Observation Point with Frank and Kistiakowsky.

You’ll all be assigned to Base Camp,

West Observation, or Far Observation.

Hey, whoa, whoa! Careful with that knife.

Are those safe distances?

They’re based on your calculations.

Time to stand behind your science, Hans. Literally.

What about the radiation cloud?

Without high winds, it should settle within 2-3 miles.

Evacuation measures are in place.

But we need good weather for visibility, so it has to be fine.

Everybody out!

We go on the night of the 15th. It’s a hard deadline.

So if anyone has anything, speak now.

Okay, stop, stop! Everybody, mattresses.

Put the mattress there, underneath.

We could use a final implosion test.

It couldn’t hurt.

Do it.

Is there anything else that might stop us?

It’s happening, isn’t it?

I’ll send a message.

If it’s gone our way: “Take in the sheets.”

Robert.

Break a leg.

Look.

Oppie’s taken a very modest three kilotons.

Teller’s view is 45.

20!

20,000 tons of TNT.

And does anyone want the side action on atmospheric ignition?

Are you saying we’ll have to delay?

I’m saying it would be prudent.

This weather, has it reached the site?

Bethe is calling to tell you the implosion test failed.

Hello, Hans? Yes, he’s here.

Yes.

Is he wrong?

No.

No?

No.

So we’re about to fire a dud?

No.

Explain!

Well, I can’t. I just, I… I just know, I know the implosion lenses will work.

If we fire these detonators and they don’t trigger a reaction, two years’ worth of plutonium will be scattered across White Sands.

A month of my salary against ten bucks says it lights.

Oh, Jesus!

The wind’s pickin’ up at zero, not the rain. Lightning’s circling.

Think it might be time to tell your men to get away

from the steel tower with the atomic bomb?

Let’s get to South Observation.

Pull ’em out, and we can make our determination there.

The team hasn’t slept in two nights!

If we stand down and make the bomb safe, we won’t be back here for weeks!

And we’ll miss Potsdam!

I gotta get word to Truman by seven, our window’s closing.

What is this doing?

Raining, blowing, lightning.

For how long, damnit?

Holdin’ strong!

It’ll break before dawn.

How could you know that?

I know this desert.

Storm cools overnight. Just before dawn, storm breaks.

You could be right, but schedule as late as possible.

Five-thirty.

Sign your forecast. If you’re wrong, I’ll hang you.

Tell ’em all. Five-thirty.

Five-thirty, five-thirty!

Three years, 4,000 people, two billion dollars.

Well, if it doesn’t go off, we’re both finished.

I’m betting on three kilotons.

Anything less, they won’t get what it is.

Now, what did Fermi mean by, uh, atmospheric ignition?

Well, we had a moment where it looked like the chain reaction from an atomic device might never stop.

Setting fire to the atmosphere.

Why’s Fermi still taking side bets on it?

Call it gallows humor.

LESLIE GROVES: Wait, are we saying there’s a chance that when we push that button, we destroy the world?

J. ROBERT OPPENHEIMER: Nothing in our research over three years supports that conclusion, except as the most remote possibility.

LESLIE GROVES: How remote?

J. ROBERT OPPENHEIMER: Chances are near-zero.

LESLIE GROVES: Near-zero?

J. ROBERT OPPENHEIMER: What do you want from theory alone?

LESLIE GROVES: Zero would be nice!

In exactly one hour… and 58 minutes, we’ll know.

It’s letting up.

The arming party’s left zero, they’re heading this way.

Throw on your switches.

Turn the cars! Ready for emergency evacuation.

…welder’s glass. Everybody take their places.

Everybody take a welder’s glass!

Everybody take a welder’s glass!

20 minutes.

20 minutes!

That’s 20!

On the leg, please.

Feynman?

No.

The glass stops the UV.

What stops the glass?

I’m heading to base camp.

Best of luck.

Robert?

Try not to blow up the world.

Watch that needle. If the detonators don’t charge, and the voltage drops below one volt, you hit that button, you abort. Understood?

Understood.

Two minutes to detonation.

Everybody down!

Do not turn around until you see light reflected on the hills.

Then look at the explosion only through your welder’s glass.

90 seconds to detonation.

80 seconds to detonation.

Is it rubbed in?

Yeah.

60 seconds to detonation.

These things are hard on your heart.

30 seconds.

Detonators charged!

17.

16.

15.

14.

13.

12.

11.

Ten.

Nine.

Eight.

Seven.

Six.

Five.

Four.

Three.

Two.

One.

“And now I am become Death… the destroyer of worlds.”

It worked.

You owe me ten dollars!

Come on!

I… I’m good for it, Kisti.

You are!

Yes, you are!

Get me Potsdam right away.

Get a message to Kitty.

We can’t say anything.

Tell her to take in the sheets.

Hello?

Hi, Kitty?

What? What? Charlotte? Charlotte, go ahead. Go ahead.

Oh, um, well, I don’t know, he just said to tell you to bring in the sheets.

Kitty?

Kitty? Kitty, are you still there?

If they detonate it too high in the air, the blast won’t be as powerful.

With respect, Dr. Oppenheimer, we’ll take it from here.

Did Truman brief Stalin at Potsdam?

“Brief” would be an overstatement.

He referred to a powerful new weapon.

Stalin… hoped we’d use it against Japan.

That’s it?

Robert, we’ve given them an ace. It’s for them to play the hand.

You’re aiming for the sixth?

It’s up to the CO in the Pacific.

Should I come with you to Washington?

What for?

Well, you keep me informed.

Of course.

As best I can.

EDWARD TELLER: Would the Japanese surrender if they knew what was coming?

I don’t know.

Have you seen Szilard’s petition?

How the hell does Szilard know about the Japanese?

You’re not signing it, are you?

Many people have. A lot of people.

Edward… the fact that we built this bomb does not give us any more, any more right or responsibility to decide how it’s used than anyone else.

But we’re the only people who know about it.

I’ve told Stimson the various opinions of the community.

But what’s your opinion?

Once it’s used… nuclear war, perhaps… all war… becomes unthinkable.

Until somebody builds a bigger one.

I thought they would call.

It’s only the fifth.

In Japan, it’s the sixth.

Charlotte?

Try Groves.

Anything?

Charlotte?

Truman’s on the radio.

16 hours ago, an American airplane dropped one bomb on Hiroshima, and destroyed its usefulness to the enemy.

The bomb has more power than 20,000 tons of TNT.

It is an atomic bomb.

It is a harnessing of the basic power of the universe.

Groves on one.

General?

I’m very proud of you, and all of your people.

It went alright?

Apparently it went with a tremendous bang.

Well, everyone here is feeling reasonably good about it.

It’s been a long road.

I think one of the wisest things I ever did was when I selected the director of Los Alamos.

We have spent more than two billion dollars on the greatest scientific gamble in history, and we have won.

Oppie! Oppie! Oppie!

The world… will remember this day.

It’s too soon to…

It’s too soon to determine what the results of the bombing are.

But I’ll bet the Japanese didn’t like it.

I’m so proud.

So proud of what you have accomplished.

I just wish we had it in time to use against the Germans.

Dr. Oppenheimer?

Dr. Oppenheimer?

Nice picture.

President Truman will see you now.

Dr. Oppenheimer, it’s an honor.

Mr. President.

Please.

Thank you.

Secretary Byrnes.

How’s it feel to be the most famous man in the world?

You helped save a lot of American lives.

What we did at Hiroshima was…

And Nagasaki.

Obviously.

Your invention let us bring our boys home.

Well, it was hardly… my invention.

It was you on the cover of Time.

Jim tells me you’re concerned about an arms race with the Soviets.

Ah, yes, ah…

Well, um… it’s that, uh, now is our chance to secure… international cooperation on atomic energy, and-and-and I’m concerned…

Do you know when the Soviets are gonna have the bomb?

I don’t think I could give a…

Never!

Never.

Mr. President, the Russians have good physicists, and, and abundant resources…

Abundant?

Yes.

I don’t think so.

Well, they’ll put everything they have in…

I hear you’re leaving Los Alamos.

What should we do with it?

Give it back to the Indians.

Um, Dr. Oppenheimer… if what you say about the Soviets is true, we have to build up Los Alamos, not shut it down.

J. ROBERT OPPENHEIMER: Mr. President…

Umm…

J. ROBERT OPPENHEIMER: I feel that I have blood on my hands.

HARRY TRUMAN: [tauntingly pulls out his pocket square and waves it in front of Oppenheimer] You think anyone in Hiroshima, or… Nagasaki, gives a shit who built the bomb? They care who dropped it. I did. Hiroshima isn’t about you.

Dr. Oppenheimer.

HARRY TRUMAN: [after Oppenheimer leaves] Don’t let that crybaby back in here!

Robert saw that hand-wringing got him nowhere.

By the time I met him, he’d fully embraced his “Father of the Bomb” reputation.

And used his profile to influence policy.

Doctor, in the years following the war, would you say that you exerted a great influence on the atomic policies of the USA?

I think “great” would be an overstatement.

Really? I mean, look at the issue of isotopes.

Were you not personally responsible for destroying all opposition to their export?

…could use a bottle of beer in making atomic weapons. In fact, you do.

I was the spokesman, but the opinion among scientists was unanimous.

All along, with McCarthy on the rise, he knew he was vulnerable.

His brother was blacklisted by every university in the country.

Lomanitz wound up working the railroad, laying track.

Chevalier went into exile.

But none of that stopped Robert from pushing the GAC to recommend arms control, instead of the H-Bomb.

He was devastated when Truman rejected their recommendation.

I miss Richard more than I can bear.

I know, Ruth. I know.

I’m just glad he didn’t live to see where this has all gone.

Here comes the birthday boy, to gloat…

Have fun.

Robert, my son and his fiancée are desperate to meet the father of the atomic bomb, so…

Hello.

Is this a bad time?

What do you think, Lewis?

Well, I think it must have been a blow for you.

For the world.

The world? What does Fuchs mean to the rest of the world?

Fuchs?

Klaus Fuchs?

Oh dear. You haven’t heard.

Klaus Fuchs, the British scientist

that you put onto the implosion team at Los Alamos.

Turns out he was…

He was spying for the Soviets the whole time.

I’m sorry.

After the truth about Fuchs came out, the FBI stepped up surveillance on him.

He knew his phone was tapped.

He was followed everywhere.

His trash picked through.

But he never stopped speaking his mind.

A man of conviction.

And maybe he thought fame could actually protect him.

When Eisenhower took office, he saw one more chance.

He took it.

America and Russia may be likened… to two scorpions in a bottle.

Each capable of killing the other, but only at the risk of his own life.

Now, there are various aspects of this policy…

A lot of scientists blame me, but how was I supposed to protect him?

…are too secret for discussion.

Candor is the only remedy.

Officials in Washington need to start leveling with the American people.

That was the last straw for Robert’s enemies.

So he had to lose his security clearance.

And with it, his credibility.

But how could they do it?

He was a war hero.

He’d already told everyone about his past.

Borden dredged it all up.

How could Borden get access to Oppenheimer’s FBI file?

Could it have been Nichols?

No, I can’t imagine he’d do that.

Whoever did unleashed a firestorm that burned a path in the White House, right to my desk at the AEC.

You seen ’em in there, right?

I’ve worked my whole life to get here.

The cabinet of the United States of America, and now, in front of the entire country, they want to put me back in my place.

A lowly shoe salesman.

Lewis, we can win this thing.

I think we can get the Senate to grasp that you did your duty, painful though it was.

Now, will Hill’s testimony back us up?

Hill will be fine.

I don’t really know him, but he was one of Szilard’s boys in Chicago.

And they’d never forgave Robert for not supporting the petition against bombing Japan.

This was taken 31 days after the bombing.

Virtually everyone in the streets, for nearly a mile around, was instantly and seriously… burned.

The Japanese spoke of people who wore striped clothing, upon whom the skin was burned in stripes.

There were many who thought themselves lucky, who climbed out of the ruins of their homes, only slightly injured.

But they died anyway.

They died days, or weeks later, from iridium-like rays emitted in great numbers at the moment of the explosion.

Did you read this crap in the papers?

A British physicist is saying the atomic bombings were not the last act of World War II, but the first act of this cold war with Russia.

Which physicist?

I think you knew him. Patrick Blackett.

He may not be wrong. Stimson is now telling me we bombed an enemy that was essentially defeated.

Robert, you’ve all the influence now.

Please, urge them to continue my research on the Super.

I neither can nor will, Edward.

Why not?

It’s not the right use of our resources.

Is that what you really believe?

J. Robert Oppenheimer? Sphinx-like guru of the atom?

Nobody knows what you believe.

Do you? Hmm?

One final time, our program director, Dr. J. Robert Oppenheimer.

I hope that in years to come, you will look back on your work here with pride.

But today, that pride must be tempered with a profound concern.

If atomic weapons are to be added to the arsenals of a warring world, then the day will come when people will curse the name of Los Alamos.

Uh, sorry, Admiral.

Stopped off to get this.

Seems pretty favorable.

There’s Oppenheimer. What’s the caption?

Uh, “J. Robert Oppenheimer. Strauss fought him… and the US won.”

That’ll work.

Those were your words from the other day.

We needed to pivot.

But how would you know what Time Magazine was gonna write?

Henry Luce is a friend.

You sat here and let me tell you how it’s done, but you’ve been far ahead all along.

Survival in Washington.

It’s about knowing how to get things done.

Right.

What was it you said about Borden?

Why get caught holding the knife yourself?

I’m beginning to think Borden was holding the knife for you.

It’s gonna come down to how much influence Borden’s been able to exert on Teller.

Did I say something funny?

Just “Borden, Borden, Borden”, when we all know that it’s Strauss.

Lewis brought me to Princeton, Kitty.

And then you humiliated him in front of Congress.

But more useful than a sandwich!

How’d I do?

Maybe a little too well, Robert.

That was six years ago.

You know, they’re truly vindictive, patient as saints.

Strauss has been perfectly clear that he is neutral.

Wake up! It is Strauss!

It’s always been Strauss, and you know it!

Why won’t you fight him?

It wasn’t Nichols, or Hoover, or one of Truman’s guys.

It was you.

You gave the file to Borden.

You set him on Oppenheimer.

You convinced him…

Borden… didn’t take any convincing.

Take your time, use the entire file.

Write up your conclusions, send them to the FBI.

The material’s obviously extensive, but there’s nothing new here.

Your conclusions will be.

And they’ll have to be answered.

Hoover passes them to McCarthy?

Oppenheimer’s too slippery for that self-promoting clown.

I’ve talked it over with Hoover.

He’ll hold McCarthy at bay while you do this with the AEC.

Trial?

No, no trial.

You can’t give Oppenheimer a platform.

You can’t martyr him.

We need a systematic destruction of Oppenheimer’s credibility, so he can never again speak on matters of national security.

Then what?

A shabby little room. Far from the limelight.

A simple bureaucratic procedure. His Q clearance. It’s up for renewal.

You send your accusations to the FBI…

Hoover sends them to the AEC. You’re forced to act.

You write up an indictment.

You tell Oppenheimer his security clearance is not being renewed.

But offer him the chance to appeal.

As you can see, Robert, it’s not yet signed.

May I keep this?

No.

If you do decide to appeal, they’ll have to send you a copy.

When he appeals, and trust me, he will, I appoint a board.

They will, of course, have counsel.

Prosecutor?

In all but name.

Who?

Roger Robb.

Ouch.

Robb will have security clearance to examine Oppenheimer’s file.

As will the Gray Board. Defense counsel will not.

A closed hearing.

The so-called interrogatory information in your indictment of me…

No audience, no reporters, no burden of proof.

No burden of proof?

We’re not convicting.

We’re just denying.

What is it you said?

This is just how the game is played.

Well, forgive my naivete.

LEWIS STRAUSS: Amateurs seek the sun, get eaten. Power stays in the shadows.

But, sir, you’re… you’re out of the shadows now.

Yeah, that’s why this has to work.

Well…

Teller’s testifying this morning.

That’ll help. And then…

Hill is in the afternoon.

Hill is gonna help us too.

As you can see, Robert, it’s not yet signed.

May I keep this?

No.

If you do decide to appeal, then they’ll have to send you a copy.

Take my car and driver, I insist.

I’ll have to consult my lawyers, Lewis.

Of course. But don’t take too long.

I can’t keep Nichols at bay.

I’m sorry it’s come to this, Robert.

I think it’s wrong.

Nichols wants me to fight, so he can get it all on the record.

Strauss wants me to walk away.

Strauss knows that you can’t do that. You’d be accepting the charges.

You’ll lose your job.

You will lose your reputation. We’ll lose our house.

Robert, we have to fight.

As AEC counsel, I can’t represent you.

I’ll call Lloyd Garrison.

Oh, he’s good.

The best, but I have to warn you.

This won’t be a fair fight.

During your interview with Boris Pash in 1943, did you refer to microfilm?

No.

Tab 11, page one, paragraph three.

You never said, “man of the consulate, expert in the use of microfilm”?

I’m sorry, I’m sorry…

No.

I would like to know what document Mr. Robb is quoting from, and if we might be furnished with a copy.

The document is classified, Mr. Garrison.

I think we should get back to firsthand information.

This is firsthand.

How so, Roger?

There was a recording of the interview.

You let my client sit here and potentially perjure himself, and all this time, you had a recording?

Nobody told your client to misrepresent his former answers.

Misrepresent? It was 12 years ago!

Can we hear this recording?

You don’t have the clearance, Mr. Garrison.

But you’re reading it into the record!

Please, please. Is this proceeding interested in entrapment or in truth?

If it’s truth, where’s the disclosure? Where’s the witness list?

Mr. Garrison, this isn’t a trial, as you are well aware.

Evidentiary rules do not apply. We are dealing with national security.

Yes, sir, with all due respect, I fail to see how national security prevents the prosecution from providing us with a list of witnesses!

Perhaps we are in need of a brief recess.

Gentlemen. You have my words.

If you say they’re from a transcript, then I’ll accept it.

I’ve already explained I made up a cock-and-bull story.

And why would anyone make up such an elaborate story?

Because I was an idiot.

Why lie?

Well, clearly with the intention of not revealing who the intermediary was.

Your friend, Haakon Chevalier, the communist.

Is he still your friend?

Yes.

Dr. Rabi, thank you for coming.

You know who else the prosecution has called?

Teller, obviously. They’ve asked Lawrence.

What did he say?

He wasn’t going to help them, but…

But?

Strauss told him that you and Ruth Tolman had been having an affair for years.

The whole time you lived with them in Pasadena.

He convinced Lawrence that Richard died of a broken heart.

That’s absurd.

What part?

A broken heart. Richard never found out.

Is Lawrence gonna testify?

I don’t know.

Dr. Rabi, what governmental positions do you currently hold?

I am the chairman of the general advisory committee to the AEC, succeeding Dr. Oppenheimer.

And how long have you known Dr. Oppenheimer?

Since 1928. I… I know him quite well.

Well enough to speak to the bearing of his loyalty and character?

Dr. Oppenheimer is a man of upstanding character.

And he is loyal to the United States, to his friends, to the institutions of which he is part.

Eat.

Who was that?

Nothing to worry about.

After the Russian A-bomb test, did Dr. Lawrence come to see you about the hydrogen bomb?

You’d be better off asking him.

Well, I fully intend to.

Would you say that Dr. Oppenheimer was unalterably opposed to the H-bomb?

No, he, he thought that a fusion program would come at the expense of our awfully good fission program.

But that proved not to be the case.

In the event, both could be done.

Suppose that this board did not feel satisfied that in his testimony here Dr. Oppenheimer had been wholly truthful,

what would you say whether or not he should be cleared?

Why go through all this against a man who has accomplished what Dr. Oppenheimer has?

Look at his record.

We have an A-bomb, and a whole series of it.

We have a whole series of Super bombs. What more do you want?

Mermaids?

But I’ve known Secretary Strauss for many years.

And I feel it a necessity to express the warm support for science and scientists Lewis has shown.

We’ll break now.

Unless there’s any immediate business.

Senator, I’d like to once again request that we’re furnished with a list of witnesses.

And I will remind the nominee that we don’t always have that information in advance.

We do know that Dr. Hill will be here after lunch.

Mr. Chairman, our next scheduled witness, Dr. Lawrence, has apparently come down with colitis.

So we’ll proceed with William Borden instead.

Mr. Borden, welcome. Please take a seat.

Mr. Borden, during your investigation into Dr. Oppenheimer, did you reach certain conclusions?

I did.

And did there come a time when you expressed those conclusions in a letter to Mr. J. Edgar Hoover, of the Federal Bureau of Investigation?

That is correct.

Prior to the writing of the letter, did you discuss the writing of the letter with anybody attached to the Atomic Energy Commission?

I did not.

Excellent.

Do you have a copy of the letter?

I have one in front of me.

Would you please be so kind as to read it, sir?

“Dear Mr. Hoover, the purpose of this letter is to state…”

I’m sorry, I’m sorry, if I could have…

What is the purpose of the delay? He’s simply going to read the letter.

Mr. Chairman, this is the first I’ve seen of this letter.

And I see statements here, at least one, of a kind that I don’t think anyone would like to see go into the record.

These are accusations that have not previously been made, that are not part of the indictment from Nichols.

Accusations of a kind that I don’t think belong here.

The witness wrote this letter on his own initiative, laying out evidence that has already been before the board.

His conclusions are valid testimony, just like the positive conclusions of friends of Dr. Oppenheimer.

It cuts both ways.

How long has counsel been in possession of this letter?

I don’t think I should be subject to cross-examination by you, Mr. Garrison.

Mr. Garrison, given that we on the board have all read the letter, wouldn’t it be better to have it in the record?

Let’s proceed.

“Dear Mr. Hoover, the purpose of this letter is to state my opinion, based upon years of study of the available classified evidence, that, more probably than not, J. Robert Oppenheimer is an agent of the Soviet Union. The following conclusions are justified.
One, between 1929 and 1942, more probably than not, J. Robert Oppenheimer was a sufficiently hardened communist that he volunteered information to the Soviets.
Two, more probably than not, he has since been functioning as an espionage agent.
Three. More probably than not, he has since acted under a Soviet directive in influencing United States military policy.”

I’m sorry, Robert.

“Atomic energy, intelligence and…”

Is anyone ever going to tell the truth about what’s happening here?

We will now hear from Dr. David Hill.

Dr. Hill, would you care to make a statement?

Thank you.

I’ve been asked to testify about Lewis Strauss, a man who has given years of service in high positions of government, and who is known to be earnest, hard-working, and intelligent.

The views I have to express are my own, but I believe that much I have to say will help to indicate why most of the scientists in this country would prefer to see Mr. Strauss completely out of government.

You’re referring to the hostility of certain scientists, directed toward Mr. Strauss, because of his commitment to security, as demonstrated in the Oppenheimer affair?

No.

Because of the personal vindictiveness he demonstrated against Dr. Oppenheimer.

Order! Order!

It appears to most scientists around this country that Robert Oppenheimer is now being pilloried, and put through an ordeal, because he expressed his honest opinions.

Dr. Bush, I thought I was performing a service to my country when hearing this case.

No board, in this country, should sit in judgment of a man because he expressed his strong opinions.

If you want to try that case, you should try me.

Excuse me, gentlemen, if I’ve… become stirred.

But I am.

Dr. Hill, we’ve already heard that Mr. Strauss did not bring the charges, or participate in the hearings against Dr. Oppenheimer.

The Oppenheimer matter was… initiated, and carried through, largely through the animus of Lewis Strauss.

Oppenheimer made mincemeat out of Strauss’s position on the shipments of isotopes to Norway, and Strauss never forgave him this public humiliation.

Another controversy between them centered around their differences in judgment on how the H-bomb would contribute to national security.

Strauss turned to the personnel security system in order to destroy Oppenheimer’s effectiveness, and Strauss was able to find a few ambitious men who also disagreed with Oppenheimer’s positions and envied him his prestige in government circles.

I’ve always assumed, and still assume, that he is loyal to the United States.

I believe this, and I shall believe it, until I see very conclusive proof to the opposite.

Do you or do you not believe that Dr. Oppenheimer is a security risk?

In a great number of cases, I have seen Dr. Oppenheimer act in a way which was, to me, exceedingly hard to understand.

I thoroughly disagreed with him in numerous issues, and his actions frankly appeared to me confused and complicated.

To this extent, I feel I want to see the vital interests of this country in hands which I understand better, and therefore trust more.

Thank you, Doctor.

Thank you.

I’m sorry.

You shook his fucking hand!?

Oh, I would have spit in his face.

I’m not sure the Board would have appreciated that.

Is it not gentlemanly enough for you?

Well, I think you’re all being too goddamn gentlemanly.

Gray must see what Robb is doing. Why doesn’t he just shut him down?

And you, shaking Teller’s hand.

You need to stop playing the martyr.

Under the current AEC guidelines, would you clear Dr. Oppenheimer today?

Under my interpretation of the Atomic Energy Act, which did not exist when I hired Dr. Oppenheimer in 1942, I would not clear him today if I were on the commission.

Good. Thank you, General. That is all.

But I don’t think I’d clear any of those guys.

That’s all.

Dr. Oppenheimer had no responsibility in the selection or the clearance of Klaus Fuchs, did he?

No. None at all.

And you wouldn’t want to leave this board with any suggestion today that you’re here questioning his basic loyalty to the United States in the operation of Los Alamos?

By no means. I hope I didn’t lead anyone to believe otherwise for an instant.

Thank you, General.

Okay. We shouldn’t keep them waiting.

She’ll be here.

Do you even want her here?

Only a fool or an adolescent presumes to know someone else’s relationship, and you’re neither, Lloyd.

Kitty and I are grown-ups.

We’ve walked through fire together.

She’ll do fine.

Would you describe your views on communism as pro, anti, neutral?

Very strongly against.

I’ve had nothing to do with communism in, since… since 1936. Since…

Since before I met Robert.

That’s all.

The record demonstrates that Oppenheimer was not interrogated by impartial and disinterested counsel for the Gray Board.

He was interrogated by a prosecutor who used all the tricks of a rather ingenious legal background.

You are charging now that the Gray Board permitted a prosecution.

If I were on the Gray Board, I would have protested against the tactics of the man who served in fact as the prosecuting counsel.

A man appointed not by the Board, but by Lewis Strauss.

Who was this?

I’m sorry?

Who was this?

Roger Robb.

Mrs. Oppenheimer.

Did you have a Communist Party membership card?

I’m… I’m not sure.

Not sure?

Well…

Well?

I mean, presumably, the act of joining the party required sending some money and receiving a card, no?

Sorry.

Yes.

It’s just, it was all so very long ago, Mr. Robb, wasn’t it?

Not really.

Long enough to have forgotten.

Did you return the card, or rip it up?

The card whose existence I’ve forgotten?

Your Communist Party membership card?

Haven’t the slightest idea.

Can a distinction be made between Soviet communism and communism?

Well, in the days when I was a member, I thought they were definitely two things.

Oh?

I thought that the Communist Party of the United States was concerned with our domestic problems. I now no longer believe this.

I believe the whole thing’s linked together and spread all over the world, and I have believed this since I left the party 16 years ago.

But… 17 years ago. My mistake.

But you…

Sorry, 18.

18 years ago.

Are you familiar with the fact your husband was making contributions to the Spanish Civil War as late as 1942?

I knew that Robert gave money from time to time.

Did you know this money was going into Communist Party channels?

Don’t you mean through?

Pardon?

I think you mean through Communist Party channels, don’t you?

Yes.

Yes?

Yes.

Yes.

Then would it be fair to say that this meant that by 1942, your husband had not stopped having anything to do with the Communist Party?

You don’t have to answer that yes or no, you can answer that any way you wish.

I know that, thank you. It’s your question.

It’s not properly phrased.

Do you understand what I’m getting at?

I do.

Then why don’t you answer it that way?

Because I don’t like your phrase, “having anything to do with the Communist Party,” because Robert never had anything to do with the Communist Party as such.

I know he gave money to Spanish refugees.

I know he took an intellectual interest in communist ideas.

Are there two types of communists?

Intellectual communists, and your plain old regular commie?

Well, I couldn’t answer that one.

I couldn’t either.

Good evening.

Robert, you can’t win this thing.

It’s a kangaroo court with a predetermined outcome.

Why put yourself through more of it?

I have my reasons.

Alright.

Good night.

He has a point.

I’m not sure you understand, Albert.

No?

I left my country, never to return.

You served your country well.

If this is the reward she offers you, then… perhaps you should turn your back on her.

Damn it, I happen to love this country.

Then tell them to go to hell.

Interestingly enough, this is no longer a confirmation hearing.

It’s now a trial… about a trial!

For god’s sakes!

It’s not good he’s telling everyone you initiated the hearings.

He can’t prove a goddamn thing.

He certainly can’t prove that I gave the file to Borden.

We’re not in court, sir. There’s no burden of proof.

Right, they’re not convicting.

They’re just denying.

Why would Hill come here to tear me down? What’s his angle?

Do people need a reason to do the right thing?

As he sees it.

I told you.

Oppenheimer’s been poisoning the scientists against me right from that first meeting.

I don’t know what Oppenheimer said to him that day, but Einstein wouldn’t even meet my eye.

Oppenheimer knows how to manipulate his own.

At Los Alamos, he preyed on the naivete of scientists who thought they get a say in how we use their work.

They’ll never think he was that naive himself.

Doctor, during your work on the hydrogen bomb, were you… deterred by any moral qualms?

Yes, of course.

But you still got on with your work, didn’t you?

Yes, because this was work of exploration, it was not the preparation of a weapon.

You mean it was more of an academic excursion?

No, it is not an academic thing, whether you can build a hydrogen bomb.

It’s a matter of life and death.

By 1942, you were actively pushing the development of the hydrogen bomb, weren’t you?

Pushing is not the right word.

Supporting it and working on it, yes.

So when did these moral qualms become so strong that you actively opposed the development of the hydrogen bomb?

When it was suggested that it be the policy of the United States to make these things at all costs, without regard to the balance between these weapons and atomic weapons as part of our arsenal.

What do moral qualms have to do with that?

What do moral qualms have to do with it?

Yes.

Oppenheimer wanted to own the atomic bomb.

He wanted to be The Man Who Moved the Earth.

He talks about putting the nuclear genie back in the bottle.

Well, I’m here to tell you that I know, J. Robert Oppenheimer, if he could do it all over, he’d do it all the same.

You know he’s never once said that he regrets Hiroshima?

He’d do it all over. Why?

Because it made him the most important man who ever lived.

We freely used the atomic bomb.

In fact, Doctor, you assisted in selecting the target to drop the atomic bomb on Japan, didn’t you?

Yes…

Well then, you knew, did you not, that by dropping that atomic bomb on the target you selected, that thousands of civilians would be killed or injured. Is that correct?

Yes, not as many as turned out.

Oh. Then how many were killed or injured?

70,000.

70,000, both Hiroshima and…

110,000 to both.

On the day of each bombing?

Yes.

Yes.

And in the weeks and years that followed?

It has been put at somewhere between 50,000 and 100,000.

220,000 dead, at least.

Yes.

Any moral scruples about that?

Terrible ones.

But yet you testified in here that the bombing of Hiroshima was very successful.

Technically successful.

Oh! Technically it was very successful.

And it is also alleged to have helped to end the war.

Would you have been supportive of the dropping of a hydrogen bomb on Hiroshima?

That would make no sense at all.

Why?

The target is too small.

Well, supposing there had been a target in Japan big enough for a thermonuclear weapon, would you have been opposed to the dropping of it?

This was not a problem with which I was confronted.

Well, I’m confronting you with it now, sir.

It was all part of his plan.

He wanted the glorious, insincere guilt of the self-important to wear like a fucking crown and say, “No, we cannot go down this road,” even as he knew we’d have to.

Would you have been opposed to the dropping of a thermonuclear weapon on Japan because of moral scruples?

Yes, I believe I would, sir.

Did you oppose the dropping of an atomic bomb on Hiroshima because of moral scruples?

We set forth our…

No, you, you, you, you!

I’m asking you…

I set…

You, you, you!

I set forth our arguments against dropping it, but I did not endorse them.

You mean after working night and day for three years building the bomb, you then argued against the use of it?

I was asked by the Secretary of War what the views of scientists were.

I gave them the views against and the views for.

You supported the dropping of the atom bomb on Japan, didn’t you?

What do you mean…

You supported it…

What do you mean, support?

Well, you helped pick the target, didn’t you?

I did my job. I was not in a policy-making position at Los Alamos.

I would have done anything I was asked to do.

Well, then, you would have built the H-bomb too, wouldn’t you?

But I couldn’t…

I didn’t ask you that, Doctor!

And the GAC report, which you co-authored after the Soviet atomic test said: “A Super bomb should never be built!”

What we meant, what I meant…

What you, who?

Look, what I meant…

Who?

Well, wouldn’t the Russians do anything to increase their strength?

If we did it, they would have to do it!

Our efforts would only fuel their efforts, just as it had with the atomic bomb!

Just as it had with the atomic bomb, exactly!

No moral scruples in 1945, plenty in 1949.

Dr. Oppenheimer… when did your strong moral convictions develop with respect to the hydrogen bomb?

When it became clear to me that we would tend to use any weapon we had.

J. Robert Oppenheimer the martyr, I gave him exactly what he wanted.

To be remembered for Trinity, not Hiroshima!

Not Nagasaki!

He should be thanking me.

Well, he’s not.

Do we still have enough votes?

Or is the crowning moment of my career about to become the most public humiliation of my life?

Full Senate’s about to vote.

You’ll scrape through.

Great, then gather the fucking press.

Dr. J. Robert Oppenheimer, this board, having heard testimony from you and many of your current and former colleagues, has come to the unanimous conclusion that you are a loyal citizen.

However…

In the light of your continuing associations, and disregard for the security apparatus of this country, together with your somewhat disturbing conduct on the hydrogen bomb program, and the regrettable lack of candor in certain of your responses to this board, we have voted, two-to-one, to deny the renewal of your security clearance.

A full written opinion, with a dissent from Mr. Evans, will be issued to the AEC in the coming days.

That is all.

Robert.

Robert.

Don’t… Don’t take in the sheets.

Two minutes. Two minutes!

You’ll get your shot!

Is it official?

Well, there were a couple of unexpected holdouts.

I’m denied. Yeah?

I’m afraid so, sir.

Alright.

Who were the holdouts?

Um, there were three.

Led by the junior senator from Massachusetts.

Young guy trying to make a name for himself, didn’t like what you did to Oppenheimer.

What’s his name?

Uh, Kennedy.

John F. Kennedy.

Kitty?

KITTY OPPENHEIMER: Did you think that if you let them tar and feather you, then the world would forgive you? It won’t.

We’ll see.

You told me I’d be okay.

Yeah, well, I didn’t have all the facts, did I?

Here’s a fact.

President Eisenhower pinned the Medal of Freedom on my chest last year, because I’ve always done what’s right for this country.

They don’t want me in the cabinet room? Well, that’s… that’s fine.

Maybe they should just invite Oppenheimer instead.

Maybe they will.

I told you. He turned the scientists against me, one by one, starting with Einstein.

I told you about that. Einstein. Einstein by the pond.

You did, but you know, sir, since nobody… really knows what they said to each other that day, is it possible they didn’t talk about you at all?

Is it possible they spoke about something, uh… more important?

Thank you.

Albert.

The man of the moment.

You once held a reception for me in Berkeley.

You gave me an award, hmm?

Yes.

You all thought that I had lost the ability to understand what I’d started.

So…

The award really wasn’t for me, it was for all of you, hmm?

Now it’s your turn to deal with the consequences of your achievement.

ALBERT EINSTEIN: And one day, when they’ve punished you enough, they’ll serve you salmon and potato salad. Make speeches. Give you a medal…

Hello, Frank.

You’re happy, I’m happy.

ALBERT EINSTEIN: …Pat you on the back, tell you all is forgiven. Just remember… it won’t be for you. It’ll be for them.

J. ROBERT OPPENHEIMER: Albert… when I came to you with those calculations, we thought we might start a chain reaction that would destroy the entire world…

ALBERT EINSTEIN: I remember it well. What of it?

J. ROBERT OPPENHEIMER: I believe we did.

`).then(e => console.log(`Fet. ${e} missatges enviats`)).catch(console.error)
