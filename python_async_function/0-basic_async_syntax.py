#!/usr/bin/env python3
''' 1st task
'''
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    ''' waits for a random delay between 0 and seconds and runs it
    '''
    wait_time = random.random() * max_delay
    await asyncio.sleep(wait_time)
    return wait_time